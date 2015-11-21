var myApp = angular.module('myApp', ['ui.router'])

myApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/landing.html',
            controller: 'HomeController'
        })
        .state('content', {
            url: '/content',
            templateUrl: 'templates/content.html',
            controller: 'ContentController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
})

// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope) {
    $scope.number = 6
})

myApp.controller('AboutController', function($scope) {
    $scope.about = "Some info"
})

myApp.controller('ContentController', function($scope) {
    $scope.url = "http://www.tattoosforyou.org/wp-content/uploads/2013/09/Mystic-Owl-Tattoo.jpg"
})