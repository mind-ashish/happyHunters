var myApp=angular
            .module("myModule",[])
            .controller("myController",function($scope, $rootScope){
                $scope.job = {};
        $scope.submitForm = function() {
        $http({
          method  : 'POST',
          url     : '/api/v1/jobs/createJob',
          data    : $scope.job,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
         })
          .success(function(data) {
            if (data.errors) {
              alert('error in creating job');
            } else {
              alert('Job created successfully');
            }
          });
        };
     });