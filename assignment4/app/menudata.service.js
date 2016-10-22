(function() {
    'use strict';

    angular.module("Data")
        .service("MenuDataService", MenuDataService);

    MenuDataService.$inject = ["$http", "CategoriesLocation", "MenuItemsLocation", "$filter"];

    function MenuDataService($http, CategoriesLocation, MenuItemsLocation, $filter) {
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

        service.getMenuItemsForCategory = function(category) {
            var response = $http({
                method: "GET",
                url: MenuItemsLocation,
                params: {
                    "category": category
                }
            });

            return response.then(function(response) {
                return response.data;
            });
        };
        service.getSingleCategory = function(category) {
            var response = $http({
                method: "GET",
                url: CategoriesLocation,
            });

            return response.then(function(response) {
                var filter = $filter('filter');
                return filter(response.data, category, GetSingle);
            });
        }
    }

    function GetSingle(actual, expected) {
        if (actual == expected) return true;
        return false;
    }

})()
