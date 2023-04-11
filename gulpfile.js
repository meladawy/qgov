const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

function compileSass() {
  return src("src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css"));
}

function minifyJs() {
  return src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/js"));
}

function watchFiles() {
  watch("src/sass/**/*.scss", compileSass);
  watch("src/js/**/*.js", minifyJs);
}

exports.compileSass = compileSass;
exports.minifyJs = minifyJs;
exports.watch = watchFiles;
exports.default = parallel(compileSass, minifyJs);
