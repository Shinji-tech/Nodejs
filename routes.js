const messageCtrl = require('./MessageCtrl');

module.exports = function (app){
    app.get('/v1/messages', messageCtrl.sendMessage)
};