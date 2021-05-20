module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> License */\n\n", 
                footer: "\n/*! Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n Updated: <%= grunt.template.today('dS mmm yyyy @ h:MM:ss TT') %> */"},
            css: {
                src: ["node_modules/normalize.css/normalize.css", "src/style/build/main.css"], 
                dest: "src/assets/css/style.css"},
            js: {
                src: ["src/style/js/Animadio.js", "src/style/js/Slider.js", "src/style/js/Canvas.js", "src/style/js/Ajax.js"],
                dest: "src/assets/js/script.js"}
            },
        postcss: {
            options: {
                processors: [require("autoprefixer")({overrideBrowserslist: "defaults"})]},
            css: { src: "src/assets/css/style.css" }
        },
        cssmin: {
            target: {
                files: [
                    { "src/assets/css/style.min.css": ["src/assets/css/style.css"] }
                ]
            }
        },
        uglify: {
            target: {
                files: {
                  "src/assets/js/script.min.js": ["src/assets/js/script.js"]
                }
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("default", ["concat", "postcss", "cssmin", "uglify"]);
};
