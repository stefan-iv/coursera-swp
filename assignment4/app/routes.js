(function() {
    'use strict';

    angular.module("RestaurantApp")
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "templates/home.template.html"
            })
            .state("categories", {
                url: "/categories",
                templateUrl: "templates/categories.template.html",
                controller: "CategoriesController as categories",
                resolve: {
                    categoryList: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getCategories();
                    }]
                }
            });
    }

})()
