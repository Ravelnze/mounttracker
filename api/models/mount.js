const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './test-db.sqlite'
});

/**
 * @swagger
 * definitions:
 *      Mount:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              mountName:
 *                  type: string
 *              createdAt:
 *                  type: string
 *              updatedAt:
 *                  type: string
 *      MountInput:
 *          type: object
 *          properties:
 *              mountName:
 *                  type: string
 */
const Mount = sequelize.define('Mount', {
    mountName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Mount;