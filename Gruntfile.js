module.exports = function(grunt) {

  var src  = './src',
      dist = './dist';


  grunt.initConfig({

    connect : {
      dev: {
          options: {
            hostname: '0.0.0.0',
            port : 9000,
            base : src,
            open : true
          }
        }
    },

    watch : {
      scss: {
        files: [src+'/scss/**'],
        tasks: ['buildcss'],
        options: {
          livereload: true
        }
      },
      js: {
        files: [src+'/js/**'],
        options: {
          livereload: true
        }
      }
    },

    compass : {
      dev: {
        options: {
          basePath: src,
          sassDir : 'scss',
          cssDir  : 'css'
        }
      }
    },

    autoprefixer: {
       options: {
        browsers: ['last 2 version']
       },
       dev: {
        cwd : src+'/css',
        src: ['*.css', '!**/*prefix.css'],
        dest: src+'/css',
        ext : '.prefix.css',
        expand : true
       },
     }

  });



  require('load-grunt-tasks')(grunt);

  grunt.registerTask('buildcss', ['compass:dev', 'autoprefixer:dev']);

  grunt.registerTask('dev', ['connect:dev', 'buildcss', 'watch']);

};