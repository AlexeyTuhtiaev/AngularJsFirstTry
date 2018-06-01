angular.module("simpleSortingApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.items = [
            { name: "Item 1", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
            { name: "Item 2", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
            { name: "Item 3", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
            { name: "Item 4", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 },
            { name: "Item 5", price: 52.6, category: "Category 3", count: 7, tax: 1.24, expiration: 8 },
            { name: "Item 6", price: 102.6, category: "Category 3", count: 10, tax: 0.82, expiration: 15 },
            { name: "Item 7", price: 112.6, category: "Category 1", count: 27, tax: 0.2, expiration: 45 },
            { name: "Item 8", price: 8.6, category: "Category 2", count: 76, tax: 0.12, expiration: 15 }];

        $scope.categories = [
            { display: "All Items", value: "" },
            { display: "Category 1", value: "Category 1" },
            { display: "Category 2", value: "Category 2" },
            { display: "Category 3", value: "Category 3" }            
        ];

        $scope.selectedCategory = $scope.categories[0];
    });