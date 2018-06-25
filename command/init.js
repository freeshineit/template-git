'use strict'
const co = require('co');
let download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');


module.exports = (repository, projectName) => {
    co(function* () {
        if (!repository) {
            console.log(chalk.red('\n × Repository does not exit!'));
            process.exit()
        }

        if (!projectName) {
            projectName = repository.split('/')[1].replace('/\.git$/', '');
        }

        const spinner = ora('Start download git repository...').start();

        download(repository, projectName, function (err) {
            if (err) {
                spinner.fail(err);
                process.exit();
            }

            spinner.succeed('Download completed!');
            process.exit();
        })
    })
}
