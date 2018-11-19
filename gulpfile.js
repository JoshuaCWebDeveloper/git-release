/* gulpfile.js
 * Glup task-runner configruation for project
 * Dependencies: dev-tasks, gulp, gulp-util modules
 * Author: Joshua Carter
 * Created: November 18, 2018
 */
"use strict";
//include modules
var DevOps = require('dev-tasks'),
    gulp = require("gulp"),
    gutil = require("gulp-util");

//configure dev-tasks
DevOps.init({
    appName: "git-release",
    sourceDir: "src",
    gitCommitterName: "GitReleaseDevTasks"
});


//default gulp task: documentation
gulp.task('default', function () {
    gutil.log(
`

Available Gulp Commands:
 - lint
 - build
 - release major|minor|patch
`
    );
});

//lint code using ESLint
gulp.task('lint', function () {
    return DevOps.lint();
});

//build code using webpack and babel
gulp.task('build', function () {
    DevOps.lint();
    return DevOps.build();
});

//create a new release and push it to master
gulp.task('release', function () {
    return DevOps.release().done();
});

//create dummy tasks so that we can use non-hyphentated arguments
var dummy = function () {
        return;
    },
    dummies = ['patch', 'minor', 'major'];
for (let i=0; i<dummies.length; i++) {
    gulp.task(dummies[i], dummy);
}
