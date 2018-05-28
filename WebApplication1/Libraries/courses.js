var model = {
    user: "Alexey",
    courses: [{ name: "HTML, CSS", passed: true },
    { name: "JavaScript Essential", passed: true },
    { name: "JavaScript Advanced", passed: false },
    { name: "HTML5 &amp; CSS3", passed: true },
    { name: "AngularJS", passed: true }]
};

var coursesApp = angular.module("coursesdApp", []);

coursesApp.controller("coursesdAppCtrl", function ($scope) {

    $scope.data = model;

    $scope.addNewCourse = function () {
        model.courses.push({
            name: $scope.courseName,
            passed: false
        });

        $scope.courseName = "";
    }

    $scope.convertPassedText = function (passed) {
        return passed ? "Yes" : "No";
    }

    $scope.setPassedTextStyle = function (passed) {
        return passed ? "color: green" : "color: red; font-weit: bold";
    }

    $scope.tableView = "CoursesTable.html";
    $scope.shortTableView = "CoursesTableShort.html";

    $scope.url = $scope.tableView;

    $scope.fullTable = function () {
        $scope.url = $scope.tableView;
    }

    $scope.shortTable = function () {
        $scope.url = $scope.shortTableView;
    }
});