angular.module("myapp.EditSchedules",['ngRoute','firebase'])

.controller('EditSchedulesCtrl', function($scope,$firebaseArray, $firebaseObject, $routeParams){
  console.log('in edit controller')
    var id = $routeParams.id;
    var ref = firebase.database().ref('schedules/'+ id);
    $scope.schedule = $firebaseObject(ref);

    var ref = firebase.database().ref('schedules');
    $scope.data = $firebaseArray(ref);
    console.log($scope.data)

    $scope.editSchedule = function(id){
        console.log('In edit schedule function'+ id);

        var ref = firebase.database().ref("schedules/"+id);
        ref.update({
            name: $scope.schedule.name,
            date: $scope.schedule.date,
            time: $scope.schedule.time,
            location: $scope.schedule.location
        })
        .then(
            function(ref){
                $scope.schedule.name = '';
                $scope.schedule.date = '';
                $scope.schedule.time = '';
                $scope.schedule.location = '';
            },
            function(error){
                console.log(error);
            }
        )
    }

    //console.log('we are in Edit controller '+ $scope.schedule);
});
