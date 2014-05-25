app = angular.module('smash', ['ngRoute', 'ngAnimate'])

app.controller 'mainController', ($scope, $http) ->
  $scope.characterInput = 'hu'

  $scope.$watch 'characterInput', ->
    if $scope.characterInput?
      query $scope.characterInput

  query = _.debounce (input) ->
    $http {method: 'GET', url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=#{input}&apikey=51d91608bf59d25ec72796cf38c95670"}
      .success (data) ->
        $scope.characters = data.data.results
  , 100

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.
    when('/',
      templateUrl: 'public/templates/main.html'
      controller: 'mainController'
    ).
    when('/character/:id',
      templateUrl: 'public/templates/character.html'
      controller: 'characterController'
    ).
    when('/comic/:id',
      templateUrl: 'public/templates/comic.html'
      controller: 'comicController'
    ).
    otherwise(
      redirectTo: '/'
    )
]
