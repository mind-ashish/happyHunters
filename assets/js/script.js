var myApp=angular
            .module("myModule",[])
            .controller("myController",function($scope, $rootScope,$http){
                $scope.job = {};
                $scope.display1=true;
                $scope.display2=false;
                $scope.display3=false;
                
                $scope.previousJobsByRecruiter=[];
                $scope.applicants=[];
                $scope.colleges=[];
                $scope.jobs={};
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
    $scope.getColleges=function(){
        
        
        
        var url="/api/v1/colleges";
        $http.get(url).then(function(value) {
            $scope.colleges=value.data.colleges;
        }, function(reason) {
            // 
		});
        
    }
    $scope.getJobs=function(){
        
        
        
        var url="/api/v1/jobs";
        $http.get(url).then(function(value) {
            $scope.jobs=value.data.jobs;
        }, function(reason) {
            // 
		});
        
    }
    $scope.applyJob = function(data) {
        data.ApplicantId=document.getElementById("applicantId").value;
    
    $http.post("/api/v1/jobs/apply", data).then(function(value) {
        alert(value.data.message);
    }, function(reason) {
        
        alert("Some error occured: "+reason);
    });

}



 });