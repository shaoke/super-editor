'use strict';

// Include Gulp & Tools We'll Use
import fs from 'fs';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';
import cp from "child_process";

const $ = gulpLoadPlugins();

const CONFIG = {
    stackEditTag: "v4.3.11",
    stackEditSrc: "vendor-src/stackedit",
    dist: "dist",
    chromeAppSrc: "chrome-app",
    appName: "superedit",
    src: "src"
};

gulp.task('default', ()=> {

});

//===========================================
// git - submodule

//-------------------------------------------
// Init and Update **submodule-stackedit** to specific version
gulp.task('submodule:stackedit', ()=> {
    // init submodule
    cp.execSync('git submodule init');
    // update submodule
    cp.execSync('git submodule update');
    // Checkout to specific version
    cp.execSync('git checkout ' + CONFIG.stackEditTag, {cwd: CONFIG.stackEditSrc});
});

//===========================================
// stackedit tasks

//-------------------------------------------
// npm install - install nodejs packages
gulp.task('stackedit:npm:install', ()=>{
    cp.execSync('npm install', {cwd: CONFIG.stackEditSrc});
});

//-------------------------------------------
// bower install - install javascript libraries
gulp.task('stackedit:bower:install', ()=>{
    cp.execSync('bower install', {cwd: CONFIG.stackEditSrc});
});

//-------------------------------------------
// Build/minify
gulp.task('stackedit:build', ()=>{
    cp.execSync('gulp', {cwd: CONFIG.stackEditSrc});
});

//===========================================
// Chrome App

//-------------------------------------------
// clean generate app
gulp.task('chromapp:clean', ()=>{
    del(path.join(CONFIG.dist, CONFIG.appName));
});

//-------------------------------------------
// copy chrome app
gulp.task('chromeapp:copy:chrome-app-src', ()=>{
    gulp.src("**/*", {cwd: CONFIG.chromeAppSrc})
        .pipe(gulp.dest(path.join(CONFIG.dist, CONFIG.appName)));
});

//-------------------------------------------
// copy source
gulp.task('chromeapp:copy:src', ()=>{
    gulp.src("**/*", {cwd:CONFIG.src})
        .pipe(gulp.dest(path.join(CONFIG.dist, CONFIG.appName)));
});

//-------------------------------------------
// chrome app task
gulp.task('chromeapp', ['chromapp:clean', 'chromeapp:copy:chrome-app-src', 'chromeapp:copy:src']);

//===========================================
//-------------------------------------------
