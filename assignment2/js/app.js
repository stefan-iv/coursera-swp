(function () {
"use strict";

  angular.module("ShoppingCart", [])
  .controller("AvailableItemsController", AvailableItemsController)
  .controller("BoughtItemsController", BoughtItemsController)
  .service("ItemService", ItemService);

  AvailableItemsController.$inject = ["ItemService"];

  function AvailableItemsController(ItemService) {
    var ctrl = this;
    ctrl.nothingLeft = function() { return ItemService.isInventoryEmpty();}
    ctrl.items = ItemService.getAvailableItems();

    ctrl.buy = function(index) {
      ItemService.buy(index);
    }

  };

  BoughtItemsController.$inject = ["ItemService"];

  function BoughtItemsController(ItemService) {
    var ctrl = this;
    ctrl.nothingBought = function() { return ItemService.isCartEmpty();}
    ctrl.items = ItemService.getBoughtItems();

    ctrl.empty = function() {
      ItemService.empty();
    }
  };

  function ItemService() {
    var service = this;
    var availableItems = [
      { "name": "Tropic Rumble", "quantity": 3 },
      { "name": "White Ticker", "quantity": 7},
      { "name": "Rotten Sherry", "quantity": 10},
      { "name": "Calm Pearl", "quantity": 2},
      { "name": "Insane shot", "quantity": 4},
      { "name": "Chilli nectar", "quantity": 9},
      { "name": "Eastern Paralyzer", "quantity": 6},
      { "name": "Winter Kiss", "quantity": 11}
    ];


    var boughtItems = [];

    service.empty = function() {
      while(boughtItems.length>0) {
          var el = boughtItems[0];
          boughtItems.splice(0,1);
          availableItems.push(el);
      }
    }

    service.isInventoryEmpty = function() {
      return availableItems.length === 0;
    };

    service.isCartEmpty = function() {
      return boughtItems.length === 0;
    };

    service.getAvailableItems = function() {
      return availableItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.buy = function(index) {
      var item = availableItems[index];
      availableItems.splice(index,1);
      boughtItems.push(item);
    }
  }
})();
