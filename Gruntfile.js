module.exports = function(grunt){

	grunt.initConfig({
        // Remove content from directory list
  		clean: {
            all: ['dist', 'docs', '.tmp'],
            temp: ['.tmp']
        },

        // Copies files to output folder
        copy: {
            main: {
                files: [
                    { src: 'index.html', dest: 'dist/index.html' },
                    { src: 'favicon.png', dest: 'dist/favicon.png' }
                ]
            }
        },

        // Generates the documentation related to the application
        ngdocs: {
          all: ['app/**/*.js']
        },

        // Automatically includes bower dependencies on index.html
        wiredep: {
            task: {
                src: 'index.html'
            },
        },

        // Automatically detects bower_component updates and executes wiredep task
        watch: {
            js: {
                files: ['app/*', 'app/**/*'],
                tasks: ['jshint']
            }
        },

        // Automatically detects JS errors
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js', 'app/*.js']
        },


        // Minifies all the JS dependencies of wiredep
        uglify: {
            options: {
                compress: true
            },
            dev: { 
                files: { 
                    'dist/js/app.js': [
                        require('wiredep')().js, 'app/*.js', 'app/**/*.js'
                    ]
                }
            }
        },

        // Minifies all the CSS dependencies of wiredep
        cssmin: {
            minify: {
                files: { 
                    'dist/css/app.css': [
                        require('wiredep')().css, 'assets/css/*.css'
                    ]
                }
           }
        },

        // Mocks a server on custom port
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: '.',
                    open: true
                }
            },
            dist: {
                options: {
                    port: 9001,
                    base: 'dist/',
                    open: true,
                    keepalive: true
                }
            },
            docs:{
                options: {
                    port: 9002,
                    base: 'docs/',
                    open: true,
                    keepalive: true
                }
            }
        },

        // Target for configure minifying tasks
        useminPrepare: {
            html: 'index.html',
            options: {
                src: '.',
                dest: 'dist/'
            }
        },

        // Target for replacing dependencies
        usemin: {
            html: 'dist/index.html'
        }
    });

    // Tasks loading
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Task for doing minify tasks on distribution version
    grunt.registerTask('compress', [
        'useminPrepare', 'concat', 'uglify:dev', 'cssmin:minify', 'usemin'
    ]);

    // Task for watching JS errors during development (Errors detected will be outputed on console)
    grunt.registerTask('jslinter', ['watch:js']);

    // Developer related tasks
    // ===============================================================================================

    // $ grunt server (Launches development server)
    grunt.registerTask('server', [
        'wiredep', 'connect:dev', 'jslinter'
    ]);

    // $ grunt dist (Generates distribution version of application)
    grunt.registerTask('release', [
        'clean:all', 'wiredep', 'copy:main', 'compress', 'clean:temp', 'connect:dist'
    ]);

    // $ grunt docs (Launches doc portal)
    grunt.registerTask('docs', [
        'ngdocs', 'connect:docs'
    ]);
};