var app;

app = angular.module('smash', ['ngRoute']);

app.constant('API_KEY', '51d91608bf59d25ec72796cf38c95670');

app.controller('mainController', function($scope, $http, API_KEY) {
  var query;
  $scope.characterInput = 'hu';
  $scope.$watch('characterInput', function() {
    if ($scope.characterInput != null) {
      return query($scope.characterInput);
    }
  });
  return query = _.debounce(function(input) {
    return $http({
      method: 'GET',
      url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + input + "&apikey=" + API_KEY
    }).success(function(data) {
      return $scope.characters = data.data.results;
    });
  }, 100);
});

app.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'public/templates/main.html',
      controller: 'mainController'
    }).when('/character/:id', {
      templateUrl: 'public/templates/character.html',
      controller: 'characterController'
    }).when('/comic/:id', {
      templateUrl: 'public/templates/comic.html',
      controller: 'comicController'
    }).otherwise({
      redirectTo: '/'
    });
  }
]);
