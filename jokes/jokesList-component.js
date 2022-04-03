(function () {
  "use strict";

  angular.module("jokeApp").component("jokesList", {
    controller: function ($scope, $http) {
      $http.get("http://localhost:5500/jokes.json").then(function (response) {
        console.log(response.data.records);

        $scope.jokings = response.data.records;
      });
    },
    templateUrl: "jokes/jokesList-component.html",
  });
})();
