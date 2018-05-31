angular.module("twoModule", [])
    .controller("firstCtrl", function ($scope) {
        $scope.firstInputValue = "11111";
    });

angular.module("twoModule")
    .controller("secondCtrl", function ($scope) {
        $scope.secondInputValue = "22222";
    });