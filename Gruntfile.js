module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      dev: {
        options: {
          livereload: true,
        },
      },
    },
    csslint: {
      css: {
        src: ['styles/*.css']
      },
    },
    watch: {      
      htmlcss: {
        files: ['index.html','styles/*.css'],
        tasks: ['csslint'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['connect', 'csslint', 'watch']);
}
