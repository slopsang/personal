var myApp = angular.module('myApp', ['ui.router'])

myApp.config(function($stateProvider) {
    $stateProvider
        .state('dawg-coffee', {
            url: '/',
            templateUrl: 'templates/dawg-coffee.html',
            controller: 'DawgController'
        })
        .state('police-shooting', {
            url: '/police-shooting',
            templateUrl: 'templates/police-shooting.html',
            controller: 'PoliceController'
        })
        .state('spotify', {
            url: '/spotify',
            templateUrl: 'templates/spotify.html',
            controller: 'SpotifyController'
        })
})

// Landing page controller: define $scope.number as a number
myApp.controller('DawgController', function($scope) {
    $scope.number = 1
    //$scope.url = "http://students.washington.edu/sangkim1/info343/dawg-coffee/"
})

myApp.controller('PoliceController', function($scope) {
    $scope.number = 2
    //$scope.url = "http://students.washington.edu/sangkim1/info343/police-shooting/"
})

myApp.controller('SpotifyController', function($scope) {
    $scope.number = 3
    //$scope.url = "http://students.washington.edu/sangkim1/info343/spotify-template/"
})

Papa.parse("../proj", {
    download: true,
    header: true,
    complete: function(projects) {
        console.log(projects);
    }
})