# QANGULARS - work in progress

*Quick Angularjs Scaffolding* is my alternation of a project template built with a popular *Yeoman's Angular generator*. 

Yeoman's Angular Generator is a great tool and I enjoy using it, but every time when I start an AngularJS project, I find myself tweaking the project template  (mostly in the same way) to suit my needs. That leads me to spend time on unnecessary things, which is not productive, especially when I am under a deadline constraint.

This project will evolve with time and needs, but main idea behind this project is to minimize that waste of time as much as possible, if not to eliminate it completely in some cases.

***NOTE***

*All files are using 2 space indentation, if you wish to use 4 space indentation and be consistent throughout the project, you will have to manually update every file.*

## How to use it?

Simply clone the repo to your working directory and start using it

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

For deployment to your live server, use the following

    # deploy to live server
    grunt deploy

## What is changed?

I aimed to change as little as possible but turned out there was quite a lot of changes. Mostly focusing on project structure and updating *deprecated packages* where some were added, some deleted and some marked *deprecated* updated with the favoured versions.

For initial version (1.0.0) following things were done:

 * replaced deprecated *autoprefixer-core* with **autoprefixer**
 * updated *grunt-postcss* to newer version
 * removed *grunt-angular-templates* but feel free to use it if you usually do
 * added **karma-spec-reporter** for more descriptive test output
  * if you prefer default reporter just comment out line saying `reporters: ['spec'],`
 * added **load-grunt-config** module to de-clutter *Gruntfile.js*
 * moved grunt config files into `grunt/` directory to keep everything neat and tidy (grunt tasks are defined in `grunt/aliases.js`)
 * added **connect_modrewrite** module for easier mod rewrites on **connect** (dev) server
 * added **grunt-karma** 
 * replaced Yeoman's way of calling test to `grunt test`
 * removed **grunt-contrib-compass** and added **grunt-sass** package
 * project restructured to be more aligned to what [Papa John's and AngularJs Team](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modularity) recommends
   * some things were omitted and some altered though
     * not using *toastr*
     * *blocks* renamed to **internals**
     * added additional global object to IIFE's called `projectName` which should ideally be renamed per project
 * stay tuned - more will be added here before official release 


## Project structure

```
.
├── app
│   ├── 404.html
│   ├── favicon.ico
│   ├── humans.txt
│   ├── images
│   ├── index.html
│   ├── robots.txt
│   ├── scripts
│   │   ├── app.module.js
│   │   ├── components
│   │   │   ├── components.module.js
│   │   │   └── welcome
│   │   │       ├── _header.partial.html
│   │   │       ├── _welcome.scss
│   │   │       ├── welcome.controller.js
│   │   │       ├── welcome.controller.spec.js
│   │   │       ├── welcome.module.js
│   │   │       ├── welcome.routes.js
│   │   │       └── welcome.view.html
│   │   ├── core
│   │   │   ├── core.constants.js
│   │   │   ├── core.module.js
│   │   │   └── internals
│   │   │       ├── exception
│   │   │       │   ├── exception-handler.provider.js
│   │   │       │   ├── exception.factory.js
│   │   │       │   └── exception.module.js
│   │   │       ├── internals.module.js
│   │   │       ├── logger
│   │   │       │   ├── logger.factory.js
│   │   │       │   └── logger.module.js
│   │   │       └── router
│   │   │           ├── router-helper.provider.js
│   │   │           └── router.module.js
│   │   └── shared
│   │       ├── shared.module.js
│   │       └── spinner
│   │           ├── _spinner.style.scss
│   │           ├── spinner.directive.js
│   │           ├── spinner.module.js
│   │           └── spinner.view.html
│   └── styles
│       └── main.scss
├── bower.json
├── config
│   └── karma.conf.js
├── grunt
│   ├── aliases.js
│   ├── cdnify.js
│   ├── clean.js
│   ├── concurrent.js
│   ├── connect.js
│   ├── copy.js
│   ├── filerev.js
│   ├── htmlmin.js
│   ├── imagemin.js
│   ├── jscs.js
│   ├── jshint.js
│   ├── karma.js
│   ├── ngAnnotate.js
│   ├── postcss.js
│   ├── sass.js
│   ├── svgmin.js
│   ├── usemin.js
│   ├── useminPrepare.js
│   ├── watch.js
│   └── wiredep.js
├── Gruntfile.js
├── LICENSE
├── package.json
└── README.md

```

## Maintenance - what is the plan?

As I will primarily use this repo for creating my future projects, I will check, and if necessary update, both `bower` and `npm` modules **on a monthly basis**. 

If you have suggestions or doubts feel free to create an issue.

