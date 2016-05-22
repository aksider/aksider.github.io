module.exports = function(grunt) {


  	grunt.initConfig({
  	    pkg: grunt.file.readJSON('package.json'),

        concat : {
          options : {
             stripBanners : true,
             banner : '/*<%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          dist : {
            src: ['src/js/tmpl.js', 'src/js/script.js', 'src/js/jquery.flexslider-min.js'],  
            dest: 'dist/js/build.js'
          }
        },

        uglify: {
        options: {
          stripBanners: true,
          banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },

        build: {
          src: 'dist/js/build.js',
          dest: 'dist/js/build.min.js'
        }
      },

      cssmin: {
	    	with_banner: {
	    		options: {
            stripBanners: true,
	    			banner: '/* My minified CSS */'
	    		},
           files: {
	    			'dist/css/style.min.css' : 'dist/css/main.css'
	    		}
	    	}
	    },
     postcss : {
        options : {
          processors: [
            require('autoprefixer')()
          ]
        },
        dist : {
          src: 'dist/css/main.css',
         dest: 'dist/css/main.css'
        }
     },
      sass: {
        options: {
         sourceMap: false
      },
	    dist: {
	      files: {
	      'dist/css/main.css' : 'src/sass/style.scss'
	      }
	    }
	},
      imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/img/'
            }]
        }
    },

      watch: {
	    	css: {
          files: 'src/sass/*.scss',
	        tasks: ['sass']
	    	},
        postcss : {
          files: 'dist/css/main.css',
	        tasks: ['postcss']
        },
        mincss :{
          files: 'dist/css/main.css',
          tasks: ['cssmin']
        }
	    }
        });

  // Load the plugin that provides the "" task.
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'sass','cssmin']);

};
