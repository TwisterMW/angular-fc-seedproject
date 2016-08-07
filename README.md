# AngularJS fc file upload directive
AngularJS Directive for uploading files on the front end side.

## Requirements
1. NodeJS (version used 5.5.0)
2. Node NPM (version used 3.3.12)
3. Chrome (for grunt open task)

## Installation
- Clone repo from: [GitHub](https://github.com/TwisterMW/angular-fc-fileuploader.git)
- Do a npm install & bower install:
	```
	$ npm install
	
	$ bower install
	```
- When all the packages and dependences are downloaded you can run the demo by grunt task:
	```
	$ grunt server
	```
## How it works
If we take a look at Gruntfile.js we can see that grunt 'server' task is composed by several subtasks. Each one will be explained below:
	- 'clean': This task do a cleaning of all generated files at the end of server running.
	- 'copy': This task copies the index.html file to the dist directory that will be generated for display the web result on a server.
	- 'ngdocs': This tasks automatically generate a directory called 'docs' with a local website for displaying the documentation of the app source.
	- 'ngmin': This task merges all JS source in one file and compress it.
	- 'cssmin': This tasks merges all CSS stylesheets in one file and compress it.
	- 'open': This tasks run Chrome application pointing server mocked URL.
		- ':dev': This subtask of 'open' is ran for display the URL of application.
		- ':docs': This subtaks of 'open' is ran for display the URL of documentation.
	- 'serve': This task mocks a server on port :9000