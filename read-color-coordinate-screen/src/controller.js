angular.module('readscreen',[]).controller('operation',
function($scope){
        $scope.mouse = function(coordinate){
        $scope.x = coordinate.clientX;        
        $scope.y = coordinate.clientY;  
        if($scope.x <= 100){
                $scope.color = 'white';
        }      
        else if($scope.x <= 200){
                $scope.color = 'red';
        }      
        else if($scope.x <= 300){
                $scope.color = 'green';
        }      
        else if($scope.x <= 400){
                $scope.color = 'yellow';
        }      
        else {
                $scope.color = 'blue';
        }      
      }
});