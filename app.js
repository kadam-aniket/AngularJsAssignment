angular.module("myapp",['ngRoute','myapp.createNew','myapp.Dashboard','myapp.EditSchedules'])
.config(function($routeProvider){
    $routeProvider
     .when('/Dashboard',{
         controller:'DashboardCtrl',
         templateUrl: 'Dashboard/Dashboard.html'
      })
     .when('/createNew',{
        templateUrl: 'createNew/createNew.html',
        controller:'createNewCtrl'
     })
     .when('/EditSchedules/:id',{
         templateUrl : 'EditSchedule/EditSchedules.html',
         controller : 'EditSchedulesCtrl'
     })
     .otherwise({
         redirectTo: '/Dashboard' 
     })
});