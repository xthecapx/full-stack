'use strict';

angular
  .module('confusionApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      // route for the contactus page
      .when('/contactus', {
        templateUrl : 'app/templates/contactus.html',
        controller  : 'ContactController'
      })
      // route for the menu page
      .when('/menu', {
        templateUrl : 'app/templates/menu.html',
        controller  : 'MenuController'
      })
      // route for the dish details page
      .when('/menu/:id', {
        templateUrl : 'app/templates/dishdetail.html',
        controller  : 'DishDetailController'
      })
      .otherwise('/contactus');
  });
