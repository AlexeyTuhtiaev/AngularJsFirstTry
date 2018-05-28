var tests = [{ display: "Question #1", value: 1},
            { display: "Question #2", value: 2},
            { display: "Question #3", value: 3 }];

var testModuel = angular.module("testModuel", []);

testModuel.controller("testCtrl", function ($scope) {

    $scope.testItems = tests;

    $scope.mode = 1;

    $scope.onRadioBtnChange = function (value) {
        $scope.mode = value;
    }
});
