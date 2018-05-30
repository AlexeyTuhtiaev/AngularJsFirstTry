var tests = [{ display: "Question #1", value: 1 },
{ display: "Question #2", value: 2 },
{ display: "Question #3", value: 3 }];

var classesArray = [{ className: 'greenDiv', display: 'Green' },
{ className: 'redDiv', display: 'Red' },
{ className: 'orangeDiv', display: 'Orange' }];

var testModuel = angular.module("testModuel", []);

testModuel.controller("testCtrl", function ($scope) {

    $scope.testItems = tests;
    $scope.mode = { val: 1 };

    $scope.classes = classesArray;
    $scope.selectedClass = $scope.classes[0].className;

    
    $scope.addNewUser = function (newUser, isValid) {
        if (isValid) {
            $scope.message = newUser.userName;
        }
        else {
            $scope.message = 'Error!';
            $scope.showError = true;
        }
    };

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "Fill this field!";
            }
        }
    };
});
