(function () {
"use strict";

angular.module("MenuSearch", ['ngAnimate'])
  .controller("MenuSearchController", MenuSearchController)
  .factory("MenuSearchServiceFactory",MenuSearchServiceFactory)
  .directive("menuList", MenuListDirective)
  .constant("MenuLocation","https://davids-restaurant.herokuapp.com/menu_items.json");

  MenuSearchController.$inject = ["$timeout","MenuSearchServiceFactory"];

  function MenuSearchController($timeout, MenuSearchServiceFactory) {
    var ctrl = this;
    ctrl.searchTerm="";
    ctrl.error = false;
    ctrl.working = false;

    var service = MenuSearchServiceFactory();

    ctrl.search = function(searchTerm) {
      ctrl.found = undefined;
      // skip service call if nothing entered
      searchTerm = searchTerm || '';
      if(searchTerm == '') {
        ctrl.found = [];
        return;
      }

      ctrl.working = true;

      var promise = service.getMatchedMenuItems(searchTerm);

      promise.then(function(data) {
        ctrl.found = data;
        ctrl.working = false;
      }).catch(function(error) {
        ctrl.working = false;
        ctrl.error = true;
        $timeout(function () {
          ctrl.error = false;
        }, 3000);
      });
    };

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index,1);
    };
  };


// Service Factory
  MenuSearchServiceFactory.$inject = ["$http", "$filter", 'MenuLocation'];
  function MenuSearchServiceFactory($http, $filter, MenuLocation) {
    var factory = function() {
        return new MenuSearchService($http, $filter, MenuLocation);
      };
      return factory;
  };


  function MenuSearchService($http,$filter, MenuLocation) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
            method: "GET",
            url: MenuLocation
          });

      return response.then(function(response) {
          var filter =  $filter('filter');
          return filter(response.data.menu_items, {"description" : searchTerm});
      });
    };

  }

  function MenuListDirective() {
    var ddo = {
      templateUrl: "menuListTemplate.html",
      restrict: "E",
      scope: {
        items: '<',
        onRemove: '&',
        error: '<',
        working: '<'
      },
      controller: MenuListDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function MenuListDirectiveController() {
  }

})();
