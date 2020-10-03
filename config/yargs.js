const { demand } = require('yargs');

const { argv } = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of the city to know the weather',
            demand: true,
        }
    })
    .help();

module.exports = {
    argv
}    