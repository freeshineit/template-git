#!/usr/bin/env node
'use strict'

const program = require('commander');
const PACKAGE = require('../package.json');

program
    .version(PACKAGE.version, '-v, --version');

program
    .arguments('<repository> [project-directory]')
    .action((repository, projectName) => {
        require('../command/init')(repository, projectName);
    })

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}


