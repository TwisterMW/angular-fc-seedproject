module.exports = function(grunt){

  	// Project configuration.
	grunt.initConfig({
  		clean: ["dist"],

  		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
				  'dist/css/styles.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'assets/css/override.css']
				}
			}
		},

  		concat: {
			'./tmp/concat/js/scripts.js': [
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				'assets/libs/angularjs/angular.min.js',
				'assets/libs/angularjs/angular-route.min.js',
				'app/app.routes.js',
				'app/controllers/mainCtrl.js'
			],
		},

		open: {
		    dev: {
			    path: 'http://localhost:9000/dist/index.html',
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

        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/js',
                        src: '*.js',
                        dest: 'js/scripts.js'
                    }
                ]
            }
        },

        uglify: {
	        options: {
	            report: 'min',
	            mangle: false
	        }
	    },

	    serve: {
	        options: {
	            port: 9000
	        },
	        'aliases': {
	        	'scripts.js': {
	        		'output': 'scripts.js'
	        	},
	        	'styles.css': {
	        		'output': 'styles.css'
	        	}
	        }
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('server', [
        'copy', 'useminPrepare', 'concat', 'ngmin', 'uglify', 'cssmin', 'usemin', 'open:dev', 'serve'
    ]);

};