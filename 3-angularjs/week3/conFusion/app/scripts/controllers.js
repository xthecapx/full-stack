'use strict';
angular
  .module('confusionApp')
  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.dishes = menuFactory.getDishes();

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.menu = {
      2: "appetizer",
      3: "mains",
      4: "dessert"
    };
    $scope.showDetails = false;

    $scope.select = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.isSelected = function (checkTab) {
      return ($scope.tab === checkTab);
    };

    $scope.select = function(setTab) {
      $scope.tab = setTab;
      $scope.filtText = $scope.menu[setTab] || "";
    };

    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };
  }])

  .controller('ContactController', ['$scope', function($scope) {

      $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

      var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

      $scope.channels = channels;
      $scope.invalidChannelSelection = false;

  }])

  .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
      $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
      $scope.reverse = false;
      $scope.sortOptions = [
        {id: '1', value: 'author', reverse: false},
        {id: '2', value: 'date', reverse: false},
        {id: '3', value: 'rating', reverse: false}
      ];
  }])

  .controller('DishCommentController', ['$scope', function($scope) {

      //Step 1: Create a JavaScript object to hold the comment from the form
      $scope.newComment = {
        name: "",
        rating: 5,
        comments: "",
        date: ""
      };

      $scope.submitComment = function () {
          //Step 2: This is how you record the date
          $scope.newComment.date = new Date().toISOString();
          // Step 3: Push your comment into the dish's comment array
          $scope.dish.comments.push($scope.newComment);
          //Step 4: reset your form to pristine
          $scope.newCommentForm.$setPristine();
          //Step 5: reset your JavaScript object that holds your comment
          $scope.newComment = {
            name: "",
            rating: 5,
            comments: "",
            date: ""
          };
      };
  }])

  .controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {
      mychannel: "",
      firstName: "",
      lastName: "",
      agree: false,
      email: ""
    };

    $scope.channels = [
      {value:"tel", label:"Tel."},
      {value:"Email",label:"Email"}
    ];

    $scope.invalidChannelSelection = false;
  }])

  .controller('FeedbackController', ['$scope', function($scope) {
    $scope.sendFeedback = function() {
      if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      } else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {
          mychannel: "",
          firstName: "",
          lastName: "",
          agree: false,
          email: ""
        };
        $scope.feedback.mychannel="";
        $scope.feedbackForm.$setPristine();
      }
    };
  }]);
