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
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('img', function(){
    return gulp.src('./src/img/*')
        .pipe(imagemin({
            interlaced: false, // for gif
            pngquant: true, // for png
            progressive: true // for jpeg
        }))
        .pipe(gulp.dest('./dist/img'));
});

//compile less file
gulp.task('less', ['img'], function () {
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
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            root: 'tpl',
            processName: function(path){
                var r = tplPathReg.exec(path);
                return r.slice(1).join('_').replace('.', '_')
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(defineModule('plain', {
            wrapper: 'define([\'handlebars\'], function(Handlebars){var tpl = {};<%= contents %>return tpl;})'
        }))
        .pipe(gulp.dest('./dist/app'));
});

//get ready for build
gulp.task('pre-build', ['templates'], function(){
    return gulp.src(['./src/lib/jquery/*'])
        .pipe(gulp.dest('./dist/lib/jquery'));
});

//requirejs optimizer
gulp.task('build', ['pre-build'], function() {
    rjs({
        baseUrl: './',
        out: 'dist/main.js',
        paths: {
            'app': 'src/app',
            'jquery': 'src/lib/jquery/jquery-1.11.0.min',
            'handlebars': 'src/lib/handlebars/handlebars.runtime.min',
            'templates': 'dist/app/templates',
            'underscore': 'src/lib/lodash.underscore',
            'backbone': 'src/lib/backbone/backbone',
            'marionette': 'src/lib/backbone/backbone.marionette',
            'backbone.wreqr' : 'src/lib/backbone/backbone.wreqr',
            'backbone.babysitter' : 'src/lib/backbone/backbone.babysitter',
            'dialog': 'src/lib/artDialog/dialog',
            'popup': 'src/lib/artDialog/popup',
            'drag': 'src/lib/artDialog/drag',
            'dialog-config': 'src/lib/artDialog/dialog-config',
            'json': 'src/lib/json2.min',
            'datepicker': 'src/lib/datepicker/bootstrap-datepicker',
            "placeholder": "src/lib/placeholder/jquery.placeholder",
            "baseLayout": "src/app/componment/base/baseLayout"
        },
        include: ['json'],
        exclude: ['jquery'],
        removeCombined: false,
        shim: {
            'handlebars': {
                exports: 'Handlebars'
            }
        },
        wrap: false,
        name: 'src/main'
    })
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest('./'));
});
