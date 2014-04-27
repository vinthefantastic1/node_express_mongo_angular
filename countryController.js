
countryApp.factory('countryFactory', function ($http) {
    return {
    getCountryAsync: function(callback) {
         $http.get('http://localhost:3000/country').success(callback);
    }
  };
});

countryApp.controller("CountryController", function ($scope, countryFactory) {

    countryFactory.getCountryAsync(function (results) {
        console.log('CountryController async returned value');
        console.log(results);
        $scope.countries = results;
    });

    $scope.inputValue = "";



});