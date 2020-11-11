angular.module("myapp.Dashboard",['ngRoute','firebase'])
.controller('DashboardCtrl', function($scope, $firebaseArray, $firebaseObject, $routeParams)
{
    console.log('we are in dashboard controller');
  
    var ref = firebase.database().ref('schedules');
    $scope.data = $firebaseArray(ref);
    
    var id = $routeParams.id;
    var ref = firebase.database().ref('schedules/'+ id);
    $scope.schedule = $firebaseObject(ref);

    // delete functionality
    var ref = firebase.database().ref('schedules');
    $scope.data = $firebaseArray(ref);
    $scope.deleteSchedule = function(info){
        console.log(info);
        $scope.data
        .$remove(info)
        .then(
            function(ref){
                console.log(info);
            },
            function(error){
                console.log(error);
            }
        )
    }

});