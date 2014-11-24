module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      dev: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true,
        },
      },
    },
    watch: {      
      dic: {
        files: ['index.html'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
}
