app = angular.module('', ['ngRoute'])

app.controller '', ($scope) ->
  console.log $scope

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.
    when('/',
      templateUrl: 'app/views/main.html'
      controller: ''
    ).
    otherwise(
      redirectTo: '/'
    )
]
