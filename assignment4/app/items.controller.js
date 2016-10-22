(function() {
    'use strict';

    angular.module("RestaurantApp")
        .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["itemList", "category"];

    function ItemsController(itemList, category) {
        var items = this;
        items.itemList = itemList.menu_items;
        items.categoryName = category[0].name;
    }

})();
