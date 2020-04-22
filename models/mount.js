const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './test-db.sqlite'
});

const Mount = sequelize.define('Mount', {
    mountName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Mount;