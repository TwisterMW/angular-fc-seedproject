[![Build Status](https://travis-ci.org/TwisterMW/angular-fc-seedproject.svg?branch=master)](https://travis-ci.org/TwisterMW/angular-fc-seedproject)

# AngularJS Seed Project
AngularJS Seed Project generator for start to develop an application based on Angular and Bootstrap technologies for the front side.

## Requirements
1. NodeJS
2. Node NPM
3. Chrome (browser used on open task)

## Installation
- Clone repo from: [GitHub](https://github.com/TwisterMW/angular-fc-seedproject.git)
- Do a npm install & bower install:
	```
	$ npm install

	$ bower install
	```
`**NOTE:** We can optimize that command by typping: $ npm i && bower i`

- When all the packages and dependences are downloaded you can run the demo by grunt task:
	```
	$ grunt server
	```

## Looking on Grunt subtasks
If we take a look at Gruntfile.js we can see three tasks for run. Those tasks will be explained below

1. ```$ grunt server```:
	It automatically inject dependences on base file, runs a mocked server on port 9000 (by default) and start watching for JS errors during develop. It's composed by three subtasks which are:

	- $ grunt depcompile: Task composed by two subtasks (wiredep & includeSource) in order to inject all dependency libraries necessaries for running the application.
	- $ grunt connect:dev: Task that start a server on custom port (9000 by default in that case).
	- $ grunt jslinter: Custom task extending watch task implementing jshint for detecting JS errors during development.

2. ```$ grunt release```:
	It automaticaly clean previous generated release version, inject the dependencies, creates a distribution directory, it compress all source files and merges it into one and establishes a connection to server on port 9001 (by default). It's composed by six subtasks:

	- $ grunt clean:all: Task that cleans a list of directories.
	- $ grunt depcompile: Task composed by two subtasks (wiredep & includeSource) in order to inject all dependency libraries necessaries for running the application.
	- $ grunt copy:main: Task that copies index.html and favicon files to root distribution folder.
	- $ grunt compress: Custom task implementing 'useminPrepare', 'concat', 'uglify:dev', 'cssmin:minify', 'usemin' for minifying and 	compressing all CSS / JS source
	- $ grunt clean:temp: This task removes previous temporary generated files by 'compress' task.
	- $ grunt connect:dist: It opens a server on port 9001 (by default in that case).

3. ```$ grunt docs```:
	It automatically generates a documentation api and launches it on browser connected to server on port 9002. It's composed by two tasks:

	- $ grunt ngdocs: This tasks automatically generate a directory called 'docs' with a local website for displaying the documentation of the app source.
	- $ grunt connect:docs: It opens a server on port 9002 (by default in that case).

## Testing Related tasks

1. ```$ grunt test:unit```
	It automatically runs Karma processor using PhantomJS as browser and launches all test files located at "tests/" folder.

2. ```$ grunt test:coverage```
	It does the same as test:unit, but now it generates a folder named "coverage/" that automatically will be shown on browser running a server. This folder contains a complete report about code coverage in order to make our test more efficient.

## Generating AngularJS components with yeoman
If we look at package.json file we can see the last dependency "generator-twistermw-angular-component": "^2.0.0-1".
This NPM Package is also developed by me and you can follow the repo here [GitHub](https://github.com/TwisterMW/angular-generator/)

If we run at console this command: ```$ yo twistermw-angular-component``` we'll be asked for a folder to deploy the generated components (in that case we should put 'app'). The next step is choose the module name, and finally we can select all kind of angular files to be generated using the data inputed before.

`**NOTE:** If you create diferent modules for each component that you generate, you must include the module dependency on 'app/app.routes.js' file.`
`**NOTE:** All files generated will be outputed at the component generated folder. Remember to move the test specfiles to tests/ folder in order to avoid JS errors related with Jasmine functions during your application execution.`