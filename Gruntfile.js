'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    name: "<%= pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1) %>",

    jsbanner: '/*!\n' +
      '* <%= name %>\n' +
      '* v<%= pkg.version %> (<%= grunt.template.today("mm.dd.yyyy") %>)\n' +
      '* <%= pkg.author %>\n' +
      '*/\n\n',

    csbanner: '# <%= name %>\n' +
      '# v<%= pkg.version %> (<%= grunt.template.today("mm.dd.yyyy") %>)\n' +
      '# <%= pkg.author %>\n\n',

    coffee: {
      build: {
        options: {
          bare: true
        },
        files: {
          'dist/emissary.js': [
            'src/emissary.coffee'
          ]
        }
      }
    },

    concat: {
      javascript: {
        options: {
          banner: '<%= jsbanner %>'
        },
        files: {
          'dist/emissary.js':['dist/emissary.js']
        }
      },
      coffeescript: {
        options: {
          banner: '<%= csbanner %>'
        },
        files: {
          'dist/emissary.coffee':['src/emissary.coffee']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['coffee','concat']);
};
