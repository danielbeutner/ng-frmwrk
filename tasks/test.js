'use strict';
module.exports = function(grunt) {
    grunt.registerTask('test', 'My "test" task description.', function() {
        grunt.log.writeln('Currently running the "test" task.');
        grunt.task.run(
            'build'
        );
    });
};
