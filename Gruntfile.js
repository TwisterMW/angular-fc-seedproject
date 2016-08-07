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

        cachebreaker: {
            dev: {
                options: {
                    match: ['scripts.min.js', 'styles.min.css'],
                    replacement: 'md5',
                    src: {
                        path: 'dist/js/scripts.min.js'
                    }
                },
                files: {
                    src: ['dist/index.html']
                }
            }
        },

        copy: {
            main: {
                files: [
                    { src: 'index.html', dest: 'dist/index.html' },
                    { src: 'favicon.png', dest: 'dist/favicon.png' }
                ]
            }
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

    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('server', [
        'clean', 'copy', 'ngdocs', 'ngmin', 'cssmin', 'cachebreaker', 'open:dev', 'open:docs', 'serve'
    ]);

};