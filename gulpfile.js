/* eslint-disable */
'use strict'

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const realFavicon = require('gulp-real-favicon');

gulp.task('generate-favicons', done => {
  realFavicon.generateFavicon({
    masterPicture: path.resolve('./assets/favicon/faviconMaster.png'),
    dest: path.resolve('./assets/favicon/dist'),
    iconsPath: '/',
    design: {
      ios: {
        pictureAspect: 'noChange'
      },
      desktopBrowser: {
        pictureAspect: 'noChange'
      },
      windows: {
        pictureAspect: 'noChange'
      }
    },
    settings: {},
    markupFile: path.resolve('./assets/favicon/dist/faviconData.json')
  }, done);
});
