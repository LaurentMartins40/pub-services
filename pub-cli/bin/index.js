var program = require('commander');
program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .parse(process.argv);
if (program.list) {
    console.log(require('../src/main').getListPub())
}