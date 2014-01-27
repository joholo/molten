module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'molten.css': 'molten.less',
                    'molten.scss': 'molten.less'
                }
            },
            production: {
                options: {
                    yuicompress: true
                },
                files: {
                    'molten.min.css': 'molten.less'
                }
            }
        },

        sass: {
            main: {
                files: {
                    'molten.css': 'molten.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['molten.less'],
                tasks: ['default']
            },
            sass: {
                files: ['molten.scss'],
                tasks: ['sass']
            }
        }
    });

    // Register our tasks
    grunt.registerTask('default', ['less']);
};
