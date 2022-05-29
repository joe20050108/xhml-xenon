module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      requirejs:{
          xhml:{
              options:{
                  optimize: "none",
                  baseUrl:"Source",
                  include:"xhml.js",
                  out:"bin/xhml.js",
              }
          }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
  
    // Default task(s).
    grunt.registerTask('default', ['requirejs']);
  
  };