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
    stackEditSrc: "vendor-src/stackedit"
};

gulp.task('default', ()=> {

});

// Init and Update **submodule-stackedit** to specific version
gulp.task('submodule:stackedit', ()=> {
    // init submodule
    cp.execSync('git submodule init');
    // update submodule
    cp.execSync('git submodule update');
    // Checkout to specific version
    cp.execSync('git checkout ' + CONFIG.stackEditTag, {cwd: CONFIG.stackEditSrc});
});


