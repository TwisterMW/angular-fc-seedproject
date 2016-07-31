module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Task loading
  grunt.loadNpmTasks('grunt-serve');

};