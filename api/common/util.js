const { validationResult } = require('express-validator');

function generateResponse (obj) {
    return JSON.stringify(obj, null, 2);
}

async function queryWrapper(res, query, successStatus) {
    try {
        const result = await query();
        if (result) {
            res.status(successStatus ? successStatus : 200).send(generateResponse(result));
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

function validate (validations) {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) 
            return next();

        res.status(422).json({ errors: errors.array() });
    };
};

module.exports = { 
    generateResponse,
    queryWrapper,
    validate
};