coursesApp.controller("calcCtrl", function ($scope) {
    $scope.add = function () {
        $scope.result = parseFloat($scope.firstValue) + parseFloat($scope.secondValue);
    }
    $scope.diff = function () {
        $scope.result = parseFloat($scope.firstValue) - parseFloat($scope.secondValue);
    }
    $scope.mult = function () {
        $scope.result = parseFloat($scope.firstValue) * parseFloat($scope.secondValue);
    }
    $scope.div = function () {
        $scope.result = parseFloat($scope.firstValue) / parseFloat($scope.secondValue);
    }
});