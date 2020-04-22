const updateDatabase = () => {
    const Mount = require('./models/mount');
    
    Mount.sync();
}

module.exports = { updateDatabase };