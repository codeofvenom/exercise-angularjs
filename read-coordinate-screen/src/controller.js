angular.module('readscreen',[]).controller('operation',
function($scope){
        $scope.mouse = function(coordinate){
        $scope.x = coordinate.clientX;        
        $scope.y = coordinate.clientY;        
        }
});