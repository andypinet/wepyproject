const gulp = require("gulp");
const path = require("path");
const babel = require("gulp-babel");
const fs = require("fs");
const fileinclude = require("gulp-file-include");

let destpath = path.join(__dirname, "dist");


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
    gulp.src([`templates/deploys/src/ini.js`])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(babel(es7compile))
        .pipe(gulp.dest(destpath));
});

