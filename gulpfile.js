const gulp = require("gulp");
const path = require("path");
const yargs = require('yargs');
const babel = require("gulp-babel");
const fs = require("fs");
const fileinclude = require("gulp-file-include");

let sourceroot = `templates/deploys/src/`;
let destpath = path.join(__dirname, "dist");

if (yargs.argv.p) {
  sourceroot = `templates/deploys/${yargs.argv.p}/`;
  destpath = path.join(__dirname, `deploys/${yargs.argv.p}/dist`);
}

let babelrcs = {
  plugins: [
    ["transform-class-properties", { "spec": true }]
  ]
};


let es7compile = {...babelrcs,  presets: [
    [
      "env",
      {
        "targets": {
          "browsers": ["ios > 7"]
        }
      }
    ]
  ]};

gulp.task("deploy:config", [], function () {
    gulp.src([`${sourceroot}ini.js`])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(babel(es7compile))
        .pipe(gulp.dest(destpath));
});

