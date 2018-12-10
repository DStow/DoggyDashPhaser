module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        copy: {
            html: {
                nonull: true,
                expand: true,
                cwd: 'src',
                src: '/index.html',
                dest: 'deploy/'
            },
            assets: {
                nonull: true,
                expand: true,
                cwd: 'src',
                src: 'assets/**/*',
                dest: 'deploy/'
            }
        },
        concat: {
            dist: {
                src: [  "src/lib/**/*.js",
                    "src/js/**/*.js"
                     ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat','copy', 'connect', 'open', 'watch']);

}