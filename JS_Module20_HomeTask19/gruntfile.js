module.exports = function(grunt) {
  grunt.initConfig({
concat: {
    dist: {
        src: ['js/script.js', 'js/libs/*.js'],
        dest: 'dist/js/script.js',
    }
},
uglify: {
    dist: {
        src: 'dist/js/script.js',
        dest: 'dist/js/script.min.js'
    }
},
concat_css: {
    css: {
        src: 'css/*.css',
        dest: 'dist/css/style.css'
    }
},
cssmin: {
    css: {
        src: 'dist/css/style.css',
        dest: 'dist/css/style.min.css'
    }
}, 
sass: {
    dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'dist/css',
          ext: '.scss'
        }]
    }
},
watch: {
    sass: {
        files: "dist/scss/*.scss",
        tasks: ['sass']
    }
  } 
});

  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat',  'uglify', 'concat_css', 'cssmin','sass', 'watch']);
};