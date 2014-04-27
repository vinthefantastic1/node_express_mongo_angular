
plunetApp.factory('plunetFactory', function ($http) {
    return {
    getPlunetAsync: function(callback) {
    //  $http.get('http://localhost:50010/api/jobs?status=9').success(callback);
         $http.get('http://sandiego:8005/api/jobs?status=9').success(callback);
    }
  };
});

plunetApp.controller("PlunetController", function ($scope, plunetFactory) {

    plunetFactory.getPlunetAsync(function (results) {
        console.log('plunetController async returned value');
        console.log(results);
        $scope.plunetJobs = results;
    });

    $scope.understand = "I now understand how the scope works! Put anything into the box.."
    $scope.inputValue = "";

//    $scope.PlunetJobs = null;

});