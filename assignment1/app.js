(function () {
"use strict";

  angular.module("LunchChecker", [])

  .controller("LunchCheckerController", LunchCheckerController);

  LunchCheckerController.$inject = ["$scope", "$filter"];

  function LunchCheckerController($scope, $filter) {
    $scope.lunchList = "";
    $scope.messageState = undefined;
    $scope.isValid = true;

    $scope.checkLunch = function() {
      var items = $scope.lunchList.split(",");
      // filter out empty/whitespace items
      items = $filter('filter')(items, '', filterOut);

      var len = items.length;
      if(len == 0) {
          $scope.messageState = 0; // no data
      } else if(len <= 3) {
          $scope.messageState = 1; // just right
      } else {
          $scope.messageState = 2; // too much
      }
    };

  };

  function filterOut(actual, unwanted) {
    if(actual.trim() == unwanted) return false;
    return true;
  };
})();
