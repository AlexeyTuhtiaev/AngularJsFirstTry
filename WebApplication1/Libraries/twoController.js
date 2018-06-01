angular.module("twoModule", [])
    .controller("firstCtrl", function ($scope, $rootScope) {
        $scope.firstInputValue = "11111";

        $scope.sendValue = function () {
            $rootScope.$broadcast("messageFromFirstInput", {
                messageValue: $scope.firstInputValue});
        };
    });

angular.module("twoModule")
    .controller("secondCtrl", function ($scope) {
        //$scope.secondInputValue = "22222";

        $scope.$on("messageFromFirstInput", function( event, args){
            $scope.secondInputValue = args.messageValue;
        })
    });