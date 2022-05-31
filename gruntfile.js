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
          },
          converter:{
              options:{
                  optimize: "none",
                  baseUrl:"Source/LanguageConverter/js",
                  include:"converter.js",
                  out:"bin/converter.js",
              }
          }
      },
      copy:{
          converter:{
              src:"Source/LanguageConverter/html/converter.html",
              dest:"bin/converter.html",
          }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Default task(s).
    grunt.registerTask('default', ['requirejs:xhml']);
    //internal language converter task(part of the XAML to HTML Resource key workload)
    grunt.registerTask('converter',['requirejs:converter','copy']);
  
  };