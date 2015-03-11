module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
        }
      }
    },
		less: {
			development: {
				options: {
					paths: ["./css"],
					compress: true
				},
			files: {
				"./public/css/style.css": "./less/style.less"
			}
		},
	},
  jshint: {
    all: ['Gruntfile.js', 'public/**/*.js']
  },
    watch: {
      project: {
        files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json','public/**/*.css', './less/*.less'],
        tasks: ["less"],
        options: {
          reload: true
        },
        
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'less', 'jshint','watch']);

};