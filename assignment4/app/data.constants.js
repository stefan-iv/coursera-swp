(function (){
  'use strict';

  angular.module("Data")
    .constant("CategoriesLocation","https://davids-restaurant.herokuapp.com/categories.json")
    .constant("MenuItemsLocation","https://davids-restaurant.herokuapp.com/menu_items.json");
})()
