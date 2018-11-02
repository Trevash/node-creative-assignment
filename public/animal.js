angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('animal', animalDirective);

function mainCtrl($scope) {
    $scope.dogs = [];
    $scope.cats = [];

    $scope.addDog = function(dog) {
        $scope.dogs.push({
            imageUrl: dog.Url,
            breed: dog.breed
        })
    }
}

function animalDirective() {
    return {
        scope: {
            user: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (

        )
    }
}