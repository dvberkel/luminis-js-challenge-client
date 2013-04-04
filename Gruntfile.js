/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        jasmine: {
            customTemplate: {
                src: [ 'src/namespace.js', 'src/message.js' ],
                options: {
                    vendor: [ 
                        'components/jquery/jquery.min.js', 
                        'components/underscore/underscore-min.js',
                        'components/backbone/backbone-min.js'
                    ],
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js',
                    template: 'test/custom.tmpl'
                }
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [ 'src/namespace.js', 'src/message.js' ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        copy : {
            main : {
                files : [
                    { src: 'components/**', dest: 'dist/' }
                ]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    describe: false,
                    it: false,
                    expect: false
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['src/**/*.js', 'spec/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test']
            },
            jasmine: {
                files: [ '<%= jasmine.customTemplate.src %>', 
                         '<%= jasmine.customTemplate.options.specs %>', 
                         '<%= jasmine.customTemplate.options.helpers %>'
                       ],
                tasks: ['jasmine:customTemplate']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify', 'copy']);

};
