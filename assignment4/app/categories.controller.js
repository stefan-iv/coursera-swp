(function() {
    'use strict';

    angular.module("RestaurantApp")
        .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["categoryList"];

    function CategoriesController(categoryList) {
        var categories = this;
        categories.categoryList = categoryList;
    }

})();
