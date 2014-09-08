'use strict';
module.exports = function(grunt) {
    grunt.registerTask('dist', 'My "dist" task description.', function() {
        grunt.log.writeln('Currently running the "dist" task.');
        grunt.task.run('clean:dist');
        grunt.log.writeln('Not working yet!');
    });
};
