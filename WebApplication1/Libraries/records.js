angular.module("recordsApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.records = [
            { name: "Record 1", note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "06.25.2011" },
            { name: "Record 2", note: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", date: "11.21.2013" },
            { name: "Record 3", note: " When an unknown printer took a galley of type and scrambled it", date: "1.01.2010" },
            { name: "Record 4", note: "To make a type specimen book", date: "12.12.2002" },
            { name: "Record 5", note: "It has survived not only five centuries", date: "10.25.2001" },
            { name: "Record 6", note: "But also the leap into electronic typesetting, remaining essentially unchanged", date: "03.22.2017" },
            { name: "Record 7", note: "It was popularised in the 1960s", date: "09.01.2015" },
            { name: "Record 8", note: "With the release of Letraset sheets containing Lorem Ipsum passages", date: "11.01.2003" }];

        $scope.formatDate = function (date) {
            return new Date(date);
        }
        $scope.sortNotesByDate = function () {
            $scope.records = $scope.records.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        };

        $scope.sortNotesByRecord = function () {
            $scope.records = $scope.records.sort(function (a, b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });
        };

    });