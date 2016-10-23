(function() {
    'use strict';

    angular.module("RestaurantApp")
        .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["itemList"];

    function ItemsController(itemList) {
        var items = this;
        if (itemList.menu_items.length == 0) {
            items.nothingFound = true;
        } else {
            items.nothingFound = false;
            items.itemList = itemList.menu_items;
            items.categoryName = itemList.category.name;
        }
    }

})();
