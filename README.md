# QANGULARS - work in progress

*Quick Angularjs Scaffolding* is my alternation of a project template built with a popular *Yeoman's Angular generator*. 

Yeoman's Angular Generator is a great tool and I enjoy using it, but every time when I start an AngularJS project, I find myself tweaking the project template  (mostly in the same way) to suit my needs. That leads me to spend time on unnecessary things, which is unproductive, especially when I am under a deadline constraint.

## How to use it?

There is only step, clone the *repo* into your working directory

    # clone the project
    git clone https://github.com/Devgaze/qangulars.git
    
    # run grunt server
    grunt serve

    # to build the project
    grunt build

and then start developing, or modify it to meet your requirements.

For testing you have available following commands

    # run tests
    grunt test

    # run end-to-end tests with protractor
    grunt e2e



## What is changed?

I aimed to change as little as possible, mostly focusing on project structure and updating *deprecated packages*, some were added, some deleted and some marked *deprecated* updated with the favoured versions.

For initial version (1.0.0) following things were done:

 * replaced deprecated *autoprefixer-core* with **autoprefixer**
 * updated *grunt-postcss* to newer version
 * removed *grunt-angular-templates* but feel free tu use it if you usually do
 * added **karma-spec-reporter** for more descriptive test output
  * if you prefer default reporter just comment out line 68 of `config/karma.conf.js`
 * added **load-grunt-config** module to de-clutter *Gruntfile.js*
 * moved grunt config files into `grunt/` directory to keep everything neat and tidy (grunt tasks are defined in `grunt/aliases.js`)
 * added **connect_modrewrite** module to complement **livereload**
 * added **grunt-karma** 
 * replaced Yeoman's way of calling test to `grunt test`
 * stay tuned - more will be added here before official release 


## Project structure

to be added once the structure finished...

## Maintenance - what is the plan?

As I will primarily use this repo for creating my future projects, I will check, and if necessary update, both `bower` and `npm` modules **on a monthly basis**. 

If you have suggestions or doubts feel free create an issue.

