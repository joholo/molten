module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            main: {
                files: {
                    'molten.css': 'molten.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['molten.scss'],
                tasks: ['sass']
            }
        }
    });

    // Register our tasks
    grunt.registerTask('default', ['sass']);
};
