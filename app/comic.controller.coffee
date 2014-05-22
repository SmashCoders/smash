app = angular.module('smash')
  .controller 'comicController', ($scope, $http, $route, $location) ->
    $scope.id = $route.current.params.id
    $http {method: 'GET', url: "http://gateway.marvel.com/v1/public/comics/#{$scope.id}?apikey=51d91608bf59d25ec72796cf38c95670"}
      .success (data) ->
        $scope.comic = data.data.results[0]


