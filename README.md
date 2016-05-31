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

    # run end-to-end tests with protractor << NOT YET IMPLEMENTED
    grunt e2e

For deployment to your live server, use the following

    # deploy to live server << NOT YET IMPLEMENTED
    grunt deploy

And for creating a documentation use following command

    # create documentation
    grunt bookify

Documentation is generated in `doc/` folder.

There is also small utility called `qng.sh` which helps you in creation of new componentes (just follow the steps, it's really straightforward)

    # give it exec rigths first
    chmod u+x qng.sh
    # run it
    ./qng.sh
    >
    Quick Angular Scaffolding - creat new
    *********************************************
    ** 1) Application component
    ** 2) Shared component
    Type the number option and press enter or leave it blank and press enter to exit.

## What is changed?

Mostly focusing on project structure and updating *deprecated packages* where some were added, some deleted and some marked *deprecated* updated with the favoured versions.

For initial version (1.0.0) following things were done:

 * replaced deprecated *autoprefixer-core* with **autoprefixer**
 * updated *grunt-postcss* to newer version
 * removed *grunt-angular-templates* but feel free to use it if you usually do
 * added **karma-spec-reporter** for more descriptive test output
  * if you prefer default reporter, in `config/karma.config.js` file just comment out line saying `reporters: ['spec'],`
 * added **load-grunt-config** module to de-clutter *Gruntfile.js*
 * moved grunt config files into `grunt/` directory to keep everything neat and tidy (grunt tasks are defined in `grunt/aliases.js`)
 * added **connect_modrewrite** module for easier mod rewrites on **connect** (dev) server
 * added **grunt-karma** 
 * replaced Yeoman's way of running tests to `grunt test`
 * removed **grunt-contrib-compass** and added **grunt-sass** package
 * project restructured to be more aligned to what [Papa John's and AngularJs Team](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) recommends
   * some things were omitted and some altered though
     * not using *toastr*
     * *blocks* renamed to **internals**
     * added additional global object to IIFE's called `projectName` which should ideally be renamed per project
 * added **grunt-jsdoc** and **ink-docstrap** for building documentation - it is standalone command, but you can integrate it in build process
 * updted to newest version of **grunt-contrib-jshint** and **grunt-jscs**
 * updated **.jshintrc** and **.jscs** rules to match to Airbnb settings with following exceptions 
  * `latedef` true,  
  * "safeContextKeyword": ["_this", "that", "vm", "me"]
 * added **qng.sh** utility for easier generation of new components 
 * stay tuned - more will be added here before official release 


## Project structure

```
.
├── app
│   ├── images
│   ├── scripts
│   │   ├── components
│   │   │   ├── welcome
│   │   │   │   ├── _header.partial.html
│   │   │   │   ├── _welcome.scss
│   │   │   │   ├── welcome.controller.js
│   │   │   │   ├── welcome.controller.spec.js
│   │   │   │   ├── welcome.module.js
│   │   │   │   ├── welcome.routes.js
│   │   │   │   └── welcome.view.html
│   │   │   └── components.module.js
│   │   ├── core
│   │   │   ├── internals
│   │   │   │   ├── exception
│   │   │   │   │   ├── exception-handler.provider.js
│   │   │   │   │   ├── exception.factory.js
│   │   │   │   │   └── exception.module.js
│   │   │   │   ├── logger
│   │   │   │   │   ├── logger.factory.js
│   │   │   │   │   └── logger.module.js
│   │   │   │   ├── router
│   │   │   │   │   ├── router-helper.provider.js
│   │   │   │   │   └── router.module.js
│   │   │   │   └── internals.module.js
│   │   │   ├── core.constants.js
│   │   │   └── core.module.js
│   │   ├── shared
│   │   │   ├── spinner
│   │   │   │   ├── _spinner.style.scss
│   │   │   │   ├── spinner.directive.js
│   │   │   │   ├── spinner.module.js
│   │   │   │   └── spinner.view.html
│   │   │   └── shared.module.js
│   │   └── app.module.js
│   ├── styles
│   │   └── main.scss
│   ├── 404.html
│   ├── favicon.ico
│   ├── humans.txt
│   ├── index.html
│   └── robots.txt
├── config
│   └── karma.conf.js
├── doc
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
├── README.md
├── bower.json
└── package.json
```

## Maintenance - what is the plan?

As I will primarily use this repo for creating my future projects, I will check, and if necessary update, both `bower` and `npm` modules **on a monthly basis**. 

If you have suggestions or doubts feel free to create an issue.

