/*global module:false*/
var path = require("path");

module.exports = function(grunt) {
  var DIST_DIR = "dist/";
  var DIST_JS_FILENAME = DIST_DIR + "julekalender.js";
  var filesObj = {};
  filesObj[DIST_JS_FILENAME] = "src/julekalender.js";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
	clean: {
		pre: [DIST_DIR],
		post: ["<%= concat.dist.dest %>"]
	},
    concat_in_order: {
      files: filesObj,
      options: {
          extractRequired: function(filepath, filecontent) {
              var workingdir = path.normalize(filepath).split(path.sep);
              workingdir.pop();

              var deps = this.getMatches(/\*\s*@depend\s(.*\.js)/g, filecontent);
              deps.forEach(function(dep, i) {
                  var dependency = workingdir.concat([dep]);
                  deps[i] = path.join.apply(null, dependency);
              });
              return deps;
          },
          extractDeclared: function(filepath) {
              return [filepath];
          },
          onlyConcatRequiredFiles: true
      }
    },
    uglify: {
      dist: {
        src: DIST_JS_FILENAME,
        dest: DIST_DIR + "<%= pkg.name %>.min.js"
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      gruntfile: {
        src: "Gruntfile.js"
      }
    }
  });

  grunt.loadNpmTasks('grunt-concat-in-order');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("default", ["clean:pre", "jshint", "concat_in_order", "uglify", "clean:post"]);

};
