var app;

app = angular.module('', ['ngRoute']);

app.controller('', function($scope) {
  return console.log($scope);
});

app.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'app/views/main.html',
      controller: ''
    }).otherwise({
      redirectTo: '/'
    });
  }
]);
