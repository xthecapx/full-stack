'use strict';

angular
  .module('confusionApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      // route for the contactus page
      .when('/contactus', {
        templateUrl : 'templates/contactus.html',
        controller  : 'ContactController'
      })
      // route for the menu page
      .when('/menu', {
        templateUrl : 'templates/menu.html',
        controller  : 'MenuController'
      })
      // route for the dish details page
      .when('/menu/:id', {
        templateUrl : 'templates/dishdetail.html',
        controller  : 'DishDetailController'
      })
      .otherwise('/contactus');
  });
