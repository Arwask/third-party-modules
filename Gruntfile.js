'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
      jshint: {
        files: ['./*.js'],
        options: {
          predef: ["document", "console", "alert"],
          esnext: true,
          globalstrict: true,
          globals: {},
          browserify: true
        }
      },
      watch: {
        javascripts: {
          files: ['./*.js'],
          tasks: ['jshint']
        }
      }
    });
  
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['jshint', 'watch']);
  };