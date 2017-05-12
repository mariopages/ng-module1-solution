(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.formholder="";
  $scope.msgstate='';

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    if(arrayOfStrings.length > 3) {
      $scope.sayMessage = "Too much!";
      $scope.msgstate='successmsg';
    }
    else {
      if (arrayOfStrings=="") {
        $scope.sayMessage = 'Please enter data first';
        $scope.msgstate='warningmsg';
      }
      else {
        $scope.sayMessage = 'Enjoy!';
        $scope.msgstate='successmsg';
      }
    }
  }
var comma = ',';

  $scope.toomuch = function () {
    if (typeof $scope.formholder != 'string') {
    $scope.formholder = "";
    }
    splitString($scope.formholder, comma);
  }
};

})();
