const pubs = require('../mocks/pub.json');

function findAll(){
    return pubs.map(item => item.name);
}

module.exports= {
    findAll:findAll,
} 