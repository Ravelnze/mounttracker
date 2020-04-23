const { queryWrapper} = require('../../common/util');
const Mount = require('../../models/mount');

async function createMount(req, res) {
    const query = async () => {
        return await Mount.create(req.body);
    };

    await queryWrapper(res, query, 201);
};

async function updateMount(req, res) {
    const query = async () => {
        return await Mount.update(req.body, {
            where: {
                id: req.params.id
            }
        });
    };

    await queryWrapper(res, query);
}

async function deleteMount(req, res) {
    const query = async () => {
        return await Mount.destroy({
            where: {
                id: req.params.id
            }
        });
    };

    await queryWrapper(res, query);
}

exports.commands = { 
    createMount,
    updateMount, 
    deleteMount
};