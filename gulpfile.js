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
var minifyCSS = require('gulp-minify-css');

//compile less file
gulp.task('less', function () {
    gulp.src('./src/style/style.less')
        .pipe(less({
//            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/style'));
});

//remove dist folder
gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

//compile templates
var tplPathReg = /^.*\\src\\app\\(.*)\\templates\\(.*).js$/;
gulp.task('templates', ['clean'], function(){
    return gulp.src(['./src/app/**/*.tpl'])
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

//requirejs optimizer
gulp.task('build', ['templates'], function() {
    rjs({
        baseUrl: './',
        out: 'dist/main.js',
        paths: {
            "app": "src/app",
            "jquery": "src/lib/jquery/dist/jquery",
            "handlebars": "src/lib/handlebars/handlebars.runtime.min",
            "templates": "dist/app/templates",
            "underscore": "src/lib/underscore",
            "backbone": "src/lib/backbone/backbone",
            "marionette": "src/lib/backbone/backbone.marionette",
            'backbone.wreqr' : 'src/lib/backbone/backbone.wreqr',
            'backbone.babysitter' : 'src/lib/backbone/backbone.babysitter'
        },
        removeCombined: false,
        shim: {
            "handlebars": {
                exports: "Handlebars"
            }
        },
        name: "src/main"
    })
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('./'));
});
