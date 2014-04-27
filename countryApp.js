var countryApp = angular.module('CountryApp',[])
 .config(['$httpProvider', function($httpProvider) {
     //fix for running localhost on chrome
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }])
