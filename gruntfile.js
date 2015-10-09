'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    umd: {
      all: {
        options: {
          src: 'videojs.embed.js',
          dest: 'dist/videojs.embed.js',
          template: 'umd',
          amdModuleId: 'videojs-embed',
          globalAlias: 'videojs-embed',
          deps: {
            default: ['videojs'],
            amd: ['videojs'],
            cjs: ['video.js']
          }
        }
      }
    },
    uglify: {
      dist: {
        src: '<%= umd.all.options.dest %>',
        dest: 'dist/videojs.embed.min.js'
      }
    },
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);
  // Default task.
  grunt.registerTask('default', ['umd','uglify']);

};