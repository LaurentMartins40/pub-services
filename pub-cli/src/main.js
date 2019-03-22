const pubService = require('pub-services');

let getListPub = function(){
    return pubService.services.pubService.findAll();
}
module.exports = {
    getListPub:getListPub
}