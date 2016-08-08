# AngularJS Seed Project
AngularJS Seed Project generator for start to develop an application based on Angular and Bootstrap technologies for the front side.

## Requirements
1. NodeJS (version used 5.5.0)
2. Node NPM (version used 3.3.12)
3. Chrome (for grunt open task)

## Installation
- Clone repo from: [GitHub](https://github.com/TwisterMW/angular-fc-seedproject.git)
- Do a npm install & bower install:
	```
	$ npm install

	$ bower install
	```
- When all the packages and dependences are downloaded you can run the demo by grunt task:
	```
	$ grunt server
	```

## Looking on Grunt subtasks
If we take a look at Gruntfile.js we can see three tasks for run. Those tasks will be explained below

1. ```$ grunt server```:
	It automatically inject dependences on base file, runs a mocked server on port 9000 (by default) and start watching for JS errors during develop. It's composed by three subtasks which are:

		- $ grunt wiredep: Task in charge of dependency injection based on bower.json definition.
		- $ grunt connect:dev: Task that start a server on custom port (9000 by default in that case).
		- $ grunt jslinter: Custom task extending watch task implementing jshint for detecting JS errors during development.

2. ```$ grunt release```:
	It automaticaly clean previous generated release version, inject the dependencies, creates a distribution directory, it compress all source files and merges it into one and establishes a connection to server on port 9001 (by default). It's composed by six subtasks:

		- $ grunt clean:all: Task that cleans a list of directories.
		- $ grunt wiredep: Task in charge of dependency injection based on bower.json definition.
		- $ grunt copy:main: Task that copies index.html and favicon files to root distribution folder.
		- $ grunt compress: Custom task implementing 'useminPrepare', 'concat', 'uglify:dev', 'cssmin:minify', 'usemin' for minifying and 	compressing all CSS / JS source
		- $ grunt clean:temp: This task removes previous temporary generated files by 'compress' task.
		- $ grunt connect:dist: It opens a server on port 9001 (by default in that case).

3. ```$ grunt docs```:
	It automatically generates a documentation api and launches it on browser connected to server on port 9002. It's composed by two tasks:

		- $ grunt ngdocs: This tasks automatically generate a directory called 'docs' with a local website for displaying the documentation of the app source.
		- $ grunt connect:docs: It opens a server on port 9002 (by default in that case).