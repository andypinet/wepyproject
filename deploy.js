const shell = require("shelljs");
const yargs = require('yargs');
const argv = yargs.argv;

// let PNAME = "gh_1";
//
// if (argv.p) {
//   PNAME = argv.p;
// }

let tasks = [];

let config = {
    projects: [
      'gh_1'
    ]
};


config.projects.forEach(function (v, i) {
  tasks.push(new Promise(function (resolve, reject) {
    console.log('deploy project ', v, i);
    let destpath = `deploys/${v}/dist`;
    shell.rm('-rf',`${destpath}`);
    shell.exec(`cross-env NODE_ENV=production wepy build --no-cache -t ${destpath}`);
    shell.exec(`gulp deploy:config --p ${v}`);
  }))
});

if (tasks) {
  Promise.all(tasks);
}
