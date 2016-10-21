(function() {
    'use strict';

    angular.module("RestaurantApp")
        .component("categoriesList", {
            templateUrl: 'templates/categories-list.template.html',
            bindings: {
                categoryList: '<'
            }
        });
})()
