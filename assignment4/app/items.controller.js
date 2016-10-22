(function() {
    'use strict';

    angular.module("RestaurantApp")
        .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["itemList", "category"];

    function ItemsController(itemList, category) {
        var items = this;
        if (itemList.menu_items.length == 0) {
            items.nothingFound = true;
        } else {
            items.nothingFound = false;
            items.itemList = itemList.menu_items;
            items.categoryName = category[0].name;
        }
    }

})();
