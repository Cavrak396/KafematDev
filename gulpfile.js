var gulp = require("gulp");
var scss = require("gulp-sass");
var scssLint = require("gulp-sass-lint");
var consolidate = require("gulp-consolidate");
var iconfont = require("gulp-iconfont");

//Task rules
//source
//option - manilupate
//destination

//1. Scss to css
gulp.task("scss", () => {
  return gulp
    .src("src/scss/style.scss") //Src
    .pipe(scss()) //Manipulate
    .pipe(gulp.dest("dist/css")); //Destination
});

//-----------------------------------------------//



// 2. Scss lint

gulp.task("scss-lint", () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(
      scssLint({
        configFile: ".sass-lint.yml",
      })
    )
    .pipe(scssLint.format())
    .pipe(scssLint.failOnError());
});

//----------------------------------------/


// 3. Icon font task

gulp.task("iconfont", function () {
  return gulp
    .src("src/svg/*.svg")
    .pipe(
      iconfont({
        fontName: "iconfont",
        formats: ["ttf", "eot", "woff", "woff2"],
        appendCodepoints: true,
        appendUnicode: false,
        normalize: true,
        fontHeight: 1000,
        centerHorizontally: true,
      })
    )
    .on("glyphs", function (glyphs, options) {
      gulp
        .src("src/iconfont-template/iconfont.scss")
        .pipe(
          consolidate("underscore", {
            glyphs: glyphs,
            fontName: options.fontName,
            fontDate: new Date().getTime(),
          })
        )
        .pipe(gulp.dest("src/scss/base/icon-font"));
    })
    .pipe(gulp.dest("dist/fonts"));
});

//----------------------------------------------------------/


// 4. Project build

gulp.task('project-build', ['copy-html','copy-js', 'copy-img']);


//Copy
gulp.task("copy-html", () => {
  return gulp.src("*.html").pipe(gulp.dest("dist"));
});
gulp.task("copy-js", () => {
  return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("copy-img", () => {
  return gulp
    .src("src/images/*.{png,svg,jbg,jpeg}")
    .pipe(gulp.dest("dist/images"));
});

// Followed --- Watch task

gulp.task("default", ["scss", "scss-lint"], () => {
  gulp.watch("src/**/*.scss", ["scss", "scss-lint"]);
});
