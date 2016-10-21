(function() {
    'use strict';

    angular.module("Data")
        .service("MenuDataService", MenuDataService);

    MenuDataService.$inject = ["$http", "CategoriesLocation", "MenuItemsLocation"];

    function MenuDataService($http, CategoriesLocation, MenuItemsLocation) {
        var service = this;

        service.getCategories = function() {
            var response = $http({
                method: "GET",
                url: CategoriesLocation
            });



            return response.then(function(response) {
                return response.data;
            });
        };

      service.getMenuItemsForCategory = function(category ){
        var response = $http({
            method: "GET",
            url: MenuItemsLocation,
            parameters: {"category": category}
        });

        return response.then(function(response) {
            return response.data;
        });
      }
    };

})()
