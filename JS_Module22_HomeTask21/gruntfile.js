module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'javascript/src/ES6',
                src: ['script.js'],
                dest: 'javascript/src',
                ext: '.js',
                extDot: 'first'
            }]
        }
    },
    concat: {
      options: {
        separator: ''
      },
      js: {
        src: ['javascript/src/jquery.js', 'javascript/src/*.js'],
        dest: 'javascript/dist/script.min.js'
      },
      css: {
        src: ['css/dist/*.css'],
        dest: 'css/dist/style.min.css'
      }
    },
    uglify:{
      dist: {
        src: ['javascript/dist/script.min.js'],
        dest: 'javascript/dist/script.min.js',
      }
    },
    sass:{
      dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['*.scss'],
        dest: 'css/dist',
        ext: '.min.css'
      }]
    }
    },
    cssmin:{
      dist: {
        src: ['css/dist/style.min.css'],
        dest: 'css/dist/style.min.css'
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/src/*.scss'],
        tasks: ['sass']
      },
      babel: {
        files: ['javascript/src/ES6/script.js'],
        tasks: ['babel']
      }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['babel', 'sass', 'concat', 'uglify', 'cssmin']);

};