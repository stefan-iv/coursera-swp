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

    ctrl.buy = function(item) {
      ItemService.buy(item);
    }
  };

  BoughtItemsController.$inject = ["ItemService"];

  function BoughtItemsController(ItemService) {
    var ctrl = this;
    ctrl.nothingBought = function() { return ItemService.isCartEmpty();}
    ctrl.items = ItemService.getBoughtItems();
  };

  function ItemService() {
    var service = this;
    var availableItems = [
      { "name": "Tropic Rumble", "quantity": 3 },
      { "name": "White Ticker", "quantity": 7},
      { "name": "Rotten Sherry", "quantity": 10},
      { "name": "Calm Pearl", "quantity": 2},
      { "name": "Insane shot", "quantity": 4},
      { "name": "Chilli nectar", "quantity": 9}
    ];


    var boughtItems = [];

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

    service.buy = function(item) {
      var idx = availableItems.indexOf(item);
      if(idx>=0) {
        availableItems.splice(idx,1);
        boughtItems.push(item);
      }
    }
  }

})();
