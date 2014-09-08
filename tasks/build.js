'use strict';
module.exports = function(grunt) {
    grunt.registerTask('build', 'My "build" task description.', function() {
        grunt.log.writeln('Currently running the "build" task.');
        grunt.task.run(
            'clean:build',
            'bower:install',
            'copy:assets',
            'copy:partials',
            'assemble:build',
            'less:build',
            'browserify:build'
        );
    });
};
