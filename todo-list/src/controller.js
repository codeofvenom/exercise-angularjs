angular.module('todo', []).controller('todoact', function ($scope) {
  $scope.register = [];
  var x = 0;
  $scope.registering = function () {
    $scope.register[x] = $scope.input;
    $scope.input = ''
    x++;
    $scope.count = $scope.register.length;
  }
  
  $scope.del = function (ins) {
    $scope.registers.splice(ins, 1)
    $scope.count = $scope.register.length;
    return $scope.count;
  }
});