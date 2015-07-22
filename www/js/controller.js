angular.module("starter")
.controller("HelloCtrl", function($scope) {
  // attach the name to my model by using the scope
  $scope.name = "World"
  $scope.input;
  // this is how submit becomes availbable within a view
  $scope.submit = function() {
    if ($scope.input) {
      $scope.name = $scope.input;
    } else {
      $scope.name = "Stranger";
    }

  }
});
