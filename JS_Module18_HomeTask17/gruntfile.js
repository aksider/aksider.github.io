module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['js/src/**/*.js'],
            dest: 'js/dist/script.min.js'
          }
        },
        uglify: {
            options: {
            mangle: false
            },
            my_target: {
                files: {
                    'js/dist/script.min.js': ['js/dist/script.min.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                'css/dist/style.min.css': ['css/src/**/*.css', '!css/src/reset.css'],
                'css/dist/reset.min.css': ['css/src/reset.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','cssmin']);

};