(function() {
    'use strict';

    angular.module("Spinner")
      .component("loadingSpinner", {
        "templateUrl" : "templates/loadingSpinner.template.html",
        "controller" : "LoadingSpinnerController"    
      });
})();
