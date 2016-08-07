module.exports = function(grunt){

  	// Project configuration.
	grunt.initConfig({
  		clean: ["dist", "docs"],

  		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
				  'dist/css/styles.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'assets/css/override.css']
				}
			}
		},

		open: {
		    dev: {
			    path: 'http://localhost:9000/dist/index.html',
		      	app: 'chrome'
		    },
            docs: {
                path: 'http://localhost:9000/docs/index.html',
                app: 'chrome'
            }
		},

        copy: {
            main: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },

        useminPrepare: {
            html: 'dist/index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        ngdocs: {
          all: ['app/**/*.js']
        },

        ngmin: {
            dist: {
	            src: [
  					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js',
					'app/app.routes.js',
					'app/controllers/mainCtrl.js'
  				],
	            dest: 'dist/js/scripts.min.js'
           	}
        },

	    serve: {
	        options: {
	            port: 9000
	        }
    	}
    });

    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('server', [
        'clean', 'copy', 'useminPrepare', 'ngdocs', 'ngmin', 'cssmin', 'usemin', 'open:dev', 'open:docs', 'serve'
    ]);

};