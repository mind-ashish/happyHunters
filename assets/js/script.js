var myApp=angular
            .module("myModule",[])
            .controller("myController",function($scope, $rootScope,$http){
                $scope.job = {};
                $scope.display1=true;
                $scope.display2=false;
                $scope.display3=false;
                
                $scope.previousJobsByRecruiter=[];
                $scope.applicants=[];
        $scope.submitForm = function() {
            $scope.job.RecruiterId=document.getElementById("RecruiterId").value;
        
        $http.post("/api/v1/jobs/createJob", $scope.job).then(function(value) {
            alert(value.data.message);
            $scope.job.JobTitle="";
            $scope.job.JobDesc="";
        }, function(reason) {
            
            alert("Some error occured: "+reason);
		});

    }

    $scope.previousJob=function(){
        
        var url="/api/v1/jobs/"+document.getElementById("RecruiterId").value;
        $http.get(url).then(function(value) {
            $scope.previousJobsByRecruiter=value.data.jobs;
            $scope.display1=false; 
            $scope.display2=true;
            $scope.display3=false;
        }, function(reason) {
            alert("Some error occured: "+reason);   
		});
    }
    $scope.createJob=function(){
        $scope.previousJobsByRecruiter=[];
        $scope.applicants=[];
        $scope.display1=true;
        $scope.display2=false;
        $scope.display3=false;
        

    }
    $scope.checkApplicants=function(data){
        
        var id=data.JobId;
        
        var url="/api/v1/candidates/"+id;
        $http.get(url).then(function(value) {
            $scope.applicants=value.data.candidates;
            $scope.display1=false;
            $scope.display2=false;
            $scope.display3=true;
        }, function(reason) {
            alert("Some error occured: "+reason);   
		});
        
    }

 });