(function() {
    'use strict';

    angular.module("RestaurantApp")
        .component("itemList", {
            templateUrl: 'templates/item-list.template.html',
            bindings: {
                itemList: '<',
                categoryName: '<',
                nothingFound: '<'
            }
        });
})()
