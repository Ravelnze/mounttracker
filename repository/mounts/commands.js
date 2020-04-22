const { generateResponse } = require('../../common/util');
const Mount = require('../../models/mount');

async function createMount(req, res) {
    try {
        const result = await Mount.create(req.body)
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

async function updateMount(req, res) {
    try {
        const result = await Mount.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function deleteMount(req, res) {
    try {
        const result = await Mount.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = { 
    createMount,
    updateMount, 
    deleteMount
};