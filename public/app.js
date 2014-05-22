var app;

app = angular.module('smash', ['ngRoute']);

app.controller('mainController', function($scope, $http) {
  var query;
  $scope.$watch('characterInput', function() {
    if ($scope.characterInput != null) {
      return query($scope.characterInput);
    }
  });
  return query = _.debounce(function(input) {
    return $http({
      method: 'GET',
      url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + input + "&apikey=51d91608bf59d25ec72796cf38c95670"
    }).success(function(data) {
      return $scope.characters = data.data.results;
    });
  }, 100);
});

app.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'app/views/main.html',
      controller: 'mainController'
    }).when('/character/:id', {
      templateUrl: 'app/views/character.html',
      controller: 'characterController'
    }).when('/comic/:id', {
      templateUrl: 'app/views/comic.html',
      controller: 'comicController'
    }).otherwise({
      redirectTo: '/'
    });
  }
]);

var app;

app = angular.module('smash').controller('characterController', function($scope, $http, $route, $location) {
  $scope.id = $route.current.params.id;
  $http({
    method: 'GET',
    url: "http://gateway.marvel.com/v1/public/characters/" + $scope.id + "?apikey=51d91608bf59d25ec72796cf38c95670"
  }).success(function(data) {
    return $scope.character = data.data.results[0];
  });
  return $scope.idFromURI = function(uri) {
    var slashInd;
    slashInd = uri.lastIndexOf('/');
    return uri.substring(slashInd + 1);
  };
});

var app;

app = angular.module('smash').controller('comicController', function($scope, $http, $route, $location) {
  $scope.id = $route.current.params.id;
  return $http({
    method: 'GET',
    url: "http://gateway.marvel.com/v1/public/comics/" + $scope.id + "?apikey=51d91608bf59d25ec72796cf38c95670"
  }).success(function(data) {
    return $scope.comic = data.data.results[0];
  });
});
