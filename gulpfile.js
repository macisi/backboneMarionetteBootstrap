/**
 * Created by biangang on 2014/4/17.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var path = require('path');
//var amdOptimize = require('amd-optimize');

//compile less file
gulp.task('less', function () {
    gulp.src('./src/style/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist/style'));
});

//remove dist folder
gulp.task('clean', function() {
    gulp.src('./dist', {read: false})
        .pipe(clean());
});

//copy src to dist
gulp.task('dist', /*['clean'],*/ function(){
    gulp.src('./src/main.js')
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/app/**')
        .pipe(gulp.dest('./dist/app'));
    gulp.src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'));
});

//compile templates
var tplPathReg = /^.*\\src\\app\\(.*)\\templates\\(.*).js$/;
gulp.task('templates', function(){
    gulp.src(['./src/app/**/*.tpl'])
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            root: 'tpl',
            processName: function(path){
                var r = tplPathReg.exec(path);
                return r.slice(1).join("_").replace(".", "_")
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(defineModule('plain', {
            wrapper: 'define([\'handlebars\'], function(Handlebars){var tpl = {};<%= contents %>return tpl;})'
        }))
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('prepare', ['dist', 'templates']);

//gulp.task("build", ['dist', 'templates'], function () {
//
//    amdOptimize.src("main", {
//        baseUrl: "dist",
//        paths: {
//            "jquery": "lib/jquery/dist/jquery",
//            "handlebars": "lib/handlebars/handlebars.runtime.min",
//            "templates": "app/templates",
//            "underscore": "lib/underscore",
//            "backbone": "lib/backbone/backbone",
//            "marionette": "lib/backbone/backbone.marionette"
//        },
//
//        removeCombined: false,
//
//        shim: {
//            "backbone": {
//                exports: "Backbone",
//                deps: ["jquery", "underscore"]
//            },
//            "marionette": {
//                exports: "Backbone.Marionette",
//                deps: ["backbone"]
//            },
//            "handlebars": {
//                exports: "Handlebars"
//            }
//        },
//
//        findNestedDependencies: false
////            wrapShim: true,
//
////            name: "main"
//
////            out: "dist/main.js"
//    })
//    .pipe(concat("main.js"))
//    .pipe(gulp.dest("dist/"));
//
//});
