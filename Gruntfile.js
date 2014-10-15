'use strict';
module.exports = function(grunt) {

    // Init Grunt plugins
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        'notify_hooks': 'grunt-notify',
        'less':'assemble-less',
        'express': 'grunt-express-server'
    });

    // Vars
    var _ = require('lodash'),
        remapify = require('remapify'),
        path = require('path'),
        taskFiles = grunt.file.expand('config/*.yaml'),    // Load all configuration in config/
        userConfig = grunt.file.readYAML('config.yaml'),   // Load user configuration
        packageInfo = grunt.file.readJSON('package.json'), // Load package info

        // Global configuration
        globalConfig = {
            cfg: userConfig,
            pkg: packageInfo,
            meta: {
              banner:
                '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed <%= pkg.license %>\n' +
                ' */\n'
            }
        };

    // Show infos
    grunt.log.writeln(grunt.template.process(globalConfig.meta.banner, {data: globalConfig}));

    // Load all configurations for our tasks
    grunt.verbose.subhead('Task Configuration:');
    _.each(taskFiles, function  (file) {
        var taskName = path.basename(file, '.yaml'),
            taskCont = grunt.file.readYAML(file);
            grunt.verbose.ok('Reading task configuration: ' + taskName);
        globalConfig[taskName] = taskCont;
    });

    // Init configuration
    grunt.config.init(globalConfig);

    // Load all tasks in ./tasks
    grunt.task.loadTasks('tasks');

    // Register default task (the other tasks are in ./tasks)
    grunt.registerTask('default', 'The default task: build sources', function() {
        grunt.log.writeln('Currently running the "default" task.');
        grunt.task.run('clean:build', 'build', 'express:dev', 'open:dev', 'watch');
    });
};
