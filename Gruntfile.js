module.exports = function(grunt) {
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

    // Load our tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register our tasks
    grunt.registerTask('default', ['less']);
};
