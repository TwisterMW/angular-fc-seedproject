module.exports = function(grunt){

  	// Project configuration.
	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),
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
		uglify: {
			'dist/scripts.js': [
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				'assets/libs/angularjs/angular.min.js',
				'assets/libs/angularjs/angular-route.min.js',
				'app/app.routes.js',
				'app/controllers/mainCtrl.js'
			]
		}
	});

	// Task loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-serve');

	// Task concatenation
	grunt.registerTask('dist', ['concat', 'uglify', 'serve']);

};