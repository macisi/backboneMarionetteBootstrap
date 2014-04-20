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
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');

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

gulp.task('build', function() {
    rjs({
        baseUrl: 'dist',
        out: 'dist/main.js',
        paths: {
            "jquery": "lib/jquery/dist/jquery",
            "handlebars": "lib/handlebars/handlebars.runtime.min",
            "templates": "app/templates",
            "underscore": "lib/underscore",
            "backbone": "lib/backbone/backbone",
            "marionette": "lib/backbone/backbone.marionette",
            'backbone.wreqr' : 'lib/backbone/backbone.wreqr',
            'backbone.babysitter' : 'lib/backbone/backbone.babysitter'
        },
        removeCombined: false,
        shim: {
            "handlebars": {
                exports: "Handlebars"
            }
        },
        name: "main"
    })
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('./')); // pipe it to the output DIR
});
