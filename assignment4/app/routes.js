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
                    categoryList: ["MenuDataService", function(MenuDataService) {
                        return MenuDataService.getCategories();
                    }]
                }
            })
            .state("items", {
                url: "/items/:category",
                templateUrl: "templates/items.template.html",
                controller: "ItemsController as items",

                resolve: {
                    itemList: ["MenuDataService", "$stateParams", function(MenuDataService, $stateParams) {
                        return MenuDataService.getMenuItemsForCategory($stateParams.category);
                    }]
                }
            });
    }

})()
