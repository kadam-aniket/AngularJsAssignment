angular.module("myapp.createNew",['ngRoute','firebase'])
.config(['$routeProvider', function($routeProvider){
    // $routeProvider
    //     .when('/#!/createNew',{
    //        templateUrl: 'createNew/createNew.html',
    //        controller:'createNewCtrl'
    //     })
}])
.controller('createNewCtrl', function($scope, $firebaseArray, $firebaseObject, $routeParams){
   
    //create functinality
    $scope.Create = function(name,date,time,location){
        var ref = firebase.database().ref('schedules');
        $firebaseArray(ref).$add($scope.schedule)
        .then(
            function(ref){
                $scope.schedule.name = name;
                $scope.schedule.date = date;
                $scope.schedule.time = time;
                $scope.schedule.location = location;
            },
            function(error){
                console.log(error);
            }
            
        )
        
    }

    // view list
    var ref = firebase.database().ref('schedules');
    $scope.data = $firebaseArray(ref);

    //edit functinality
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
        //console.log(info);
    }
    
    console.log('we are in create New controller');
});
