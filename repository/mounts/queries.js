const { Op } = require('sequelize');
const { generateResponse } = require('../../common/util');
const Mount = require('../../models/mount');

async function getAllMounts(res) {
    try {
        const result = await Mount.findAll();
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204); // No Content
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function getMountById(req, res) {
    try {
        const result = await Mount.findByPk(req.params.id);
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204); // No Content
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function getMountsByName(req, res) {
    try {
        const result = await Mount.findAll({
            where: {
                mountName: {
                    [Op.substring]: req.params.name
                }
            }
        });
        if (result) {
            res.send(generateResponse(result));
        } else {
            res.sendStatus(204); // No Content
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    getAllMounts,
    getMountById,
    getMountsByName
}