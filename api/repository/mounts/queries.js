const { Op } = require('sequelize');
const { queryWrapper } = require('../../common/util');
const Mount = require('../../models/mount');

async function getAllMounts(res) {
    const query = async () => {
        return await Mount.findAll();
    };
    
    await queryWrapper(res, query);
}

async function getMountById(req, res, errors) {
    const query = async () => {
        return await Mount.findByPk(req.params.id);
    };
    
    await queryWrapper(res, query, errors);
}

async function getMountsByName(req, res, errors) {
    const query = async () => {
        return await Mount.findAll({
            where: {
                mountName: {
                    [Op.substring]: req.params.name
                }
            }
        });
    };
    
    await queryWrapper(res, query, errors);
}

exports.queries = {
    getAllMounts,
    getMountById,
    getMountsByName
}