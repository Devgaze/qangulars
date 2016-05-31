#!/bin/sh
show_menu(){
    NORMAL=`echo "\033[m"`
    MENU=`echo "\033[36m"` #Blue
    NUMBER=`echo "\033[33m"` #yellow
    FGRED=`echo "\033[41m"`
    RED_TEXT=`echo "\033[31m"`
    ENTER_LINE=`echo "\033[33m"`
    echo "${MENU}Quick Angular Scaffolding - creat new"
    echo "${MENU}*********************************************${NORMAL}"
    echo "${MENU}**${NUMBER} 1)${MENU} Application component ${NORMAL}"
    echo "${MENU}**${NUMBER} 2)${MENU} Shared component ${NORMAL}"
    echo ""
    echo "${ENTER_LINE}Type the number option and press enter or ${RED_TEXT}leave it blank and press enter to exit. ${NORMAL}"
    read opt
}

create_new_directory(){
  mkdir path;
}

create_component_controller(){
echo ">>>>>>>>>> $APP_NAME, $COMPONENT_NAME, $COMPONENT_STATE_NAME"
cat <<EOF >"$COMPONENT_DIRECTORY/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.controller.js"
(function (projectName, angular) {

  'use strict';

  angular
    .module('$APP_NAME.components.$COMPONENT_NAME')
    .controller('${COMPONENT_NAME}Controller', ${COMPONENT_NAME}Controller);

  ${COMPONENT_NAME}Controller.$inject = ['logger'];
  function ${COMPONENT_NAME}Controller(logger) {

    // Implementation goes here

  }

})(window.projectName = window.projectName || {}, angular);

EOF
}
create_component_view(){
cat <<EOF >"$COMPONENT_DIRECTORY/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.view.html"
<div class='component'>
  <h1>Hello $COMPONENT_NAME</h1>
</div>
EOF
}
create_component_routes(){
cat <<EOF >"$COMPONENT_DIRECTORY/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.routes.js"
(function (projectName, angular) {

  'use strict';

  angular
    .module('$APP_NAME.components.$COMPONENT_NAME')
    .run(appRun);

  function appRun(routerHelper) {

    routerHelper.configureStates(getStates());

  }

  function getStates() {

    return [
      {
        state: '$COMPONENT_STATE_NAME',
        config: {
          url: '/',
          templateUrl:  'scripts/components/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.view.html',
          controller:   '${COMPONENT_NAME}Controller',
          controllerAs: '${COMPONENT_NAME}Controller',
        },
      },
    ];

  }

})(window.projectName = window.projectName || {}, angular);

EOF
}
create_component_directive(){
cat <<EOF >"$COMPONENT_DIRECTORY/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.directive.js"
first line
second line
third line
EOF
}
create_component_spec(){
cat <<EOF >"$COMPONENT_DIRECTORY/$COMPONENT_STATE_NAME/$COMPONENT_STATE_NAME.spec.js"
(function () {

  'use strict';

  describe('test', function () {

    it('should be true', function (){

      expect(true).toBe(true);

    });

  });

})();
EOF
}

get_component_name(){
  NORMAL=`echo "\033[m"`
  MENU=`echo "\033[36m"` #Blue
  echo "${MENU}What is the name of this component?${NORMAL}"
  read COMPONENT_NAME 
  COMPONENT_STATE_NAME=$(echo $COMPONENT_NAME | tr '[:upper:]' '[:lower:]')
}

create_app_component(){
  echo "Creating app component"
  get_component_name
  echo "Checking path $COMPONENT_DIRECTORY/$COMPONENT_NAME"
  if [[ -d "$COMPONENT_DIRECTORY/$COMPONENT_NAME" ]]; then
    echo "Component with name $COMPONENT_NAME already exist please choose another name"
    get_component_name
  else
    echo "directory $COMPONENT_DIRECTORY/$COMPONENT_NAME doesn't exist, creating one"
    mkdir "$COMPONENT_DIRECTORY/$COMPONENT_NAME"
    create_component_view
    create_component_spec
    create_component_routes
    create_component_controller

  fi
  echo "Newly component can be found in app/scripts/components/$COMPONENT_NAME"
}

create_shared_component(){
  echo "Creating shared component"
  get_component_name
  echo "Newly component can be found in app/scripts/shared/$COMPONENT_NAME"
}

main(){

  COMPONENT_DIRECTORY="app/scripts/components"
  SHARED_DIRECTORY="app/scripts/components"
  APP_NAME=$(grep -Eom1 "module\(\'.+\'," app/scripts/app.module.js | sed s/module\(// | sed s/\'//g | sed s/,//g)
  clear
  echo "> $APP_NAME <"
  show_menu

  while [ opt != '' ]
    do
      if [[ $opt = "" ]]; then 
              exit;
      else
        case $opt in
          1) clear;
          create_app_component;
          exit;
          ;;

          2) clear;
          create_shared_component;
          exit;
          ;;

          x)exit;
          ;;

          \n)exit;
          ;;

          *)clear;
          echo "Pick an option from the menu";
          show_menu;
          ;;
      esac
    fi
  done
}
main 

