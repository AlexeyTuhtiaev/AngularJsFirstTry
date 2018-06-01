angular.module("calcModule", [])
    .controller("perentCalcCtrl", function ($scope) {
        $scope.result = {value: 0};
        $scope.add = function () {
            $scope.result.value = parseFloat($scope.firstValue) + parseFloat($scope.secondValue);
        }
        $scope.diff = function () {
            $scope.result.value = parseFloat($scope.firstValue) - parseFloat($scope.secondValue);
        }


    });

angular.module("calcModule")
    .controller("childCtrl", function ($scope) {
        $scope.mult = function () {
            $scope.result.value = parseFloat($scope.firstValue) * parseFloat($scope.secondValue);
        }
        $scope.div = function () {
            $scope.result.value = parseFloat($scope.firstValue) / parseFloat($scope.secondValue);
        }
    });