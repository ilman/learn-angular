var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/page1");
  $stateProvider
    .state('page1', {
      url: "/page1",
      templateUrl: "app/views/page1.html"
    })
    .state('page1.list', {
      url: "/list",
      templateUrl: "app/views/page1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('page2', {
      url: "/page2",
      templateUrl: "app/views/page2.html"
    })
    .state('page2.list', {
      url: "/list",
      templateUrl: "app/views/page2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});