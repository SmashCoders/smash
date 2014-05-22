app = angular.module('smash')
  .controller 'characterController', ($scope, $http, $route, $location) ->
    $scope.id = $route.current.params.id

    $http {method: 'GET', url: "http://gateway.marvel.com/v1/public/characters/#{$scope.id}?apikey=51d91608bf59d25ec72796cf38c95670"}
      .success (data) ->
        $scope.character = data.data.results[0]

    $scope.idFromURI = (uri) ->
      slashInd = uri.lastIndexOf('/')
      uri.substring(slashInd+1)
