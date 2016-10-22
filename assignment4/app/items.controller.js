(function() {
    'use strict';

    angular.module("RestaurantApp")
        .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["itemList"];

    function ItemsController(itemList) {
        var items = this;
        items.itemList = itemList.menu_items;
    }

})();
