(function() {
    'use strict';

    angular.module("Spinner")
      .component("loadingSpinner", {
        "templateUrl" : "templates/loadingspinner.template.html",
        "controller" : "LoadingSpinnerController"
      });
})();
