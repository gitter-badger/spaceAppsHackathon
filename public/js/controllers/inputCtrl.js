(function()  {

"use strict";
angular
  .module("myApp")
  .controller("inputCtrl", inputCtrl);

  inputCtrl.$inject = ['$scope', 'SnapshotService', '$state']

  function inputCtrl($scope, SnapshotService, $state) {
    $scope.user = {
			cough: 1,
			short: 1,
			wheezing: 1,
			sneezing: 1,
			nobstruction: 1,
			itchy: 1
		};

    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.user.lat = position.coords.latitude.toFixed(2);
      $scope.user.lon = position.coords.longitude.toFixed(2);
    });

    $scope.addSnapshot = function() {
      if($scope.user) {
        SnapshotService.send($scope.user)
        .then(function(res) {
          $state.go('home');
        }, function(err) {
          console.log('err', err);
        })
      }
      }
      // console.log($scope.user);

    $scope.slider = {
      options: {
        floor: 1,
        ceil: 5,
        showSelectionBar: true,
        getSelectionBarColor: function(value) {
            if (value === 1)
                return '#1f0';
            if (value === 2)
                return '#40bf00';
            if (value === 3)
                return '#bb6600';
            if (value === 4)
                return '#dd4000';
            if (value === 5)
                return '#f10';
            return '#333';
        },
        getPointerColor: function(value) {
            if (value === 1)
                return '#1f0';
            if (value === 2)
                return '#40bf00';
            if (value === 3)
                return '#bb6600';
            if (value === 4)
                return '#dd4000';
            if (value === 5)
                return '#f10';
            return '#333';
        }
      }
    };

  }
})();
