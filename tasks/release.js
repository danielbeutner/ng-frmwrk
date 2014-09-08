'use strict';
module.exports = function(grunt) {
    grunt.registerTask('release', 'My "release" task description.', function() {
        grunt.log.writeln('Currently running the "release" task.');
        grunt.rask.run('clean');
        grunt.rask.run('build', 'dist');
        grunt.log.writeln('Not working yet!');
    });
};
