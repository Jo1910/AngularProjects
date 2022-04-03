(function () {
  "use strict";

  angular.module("jokeApp").component("greetingUser", {
    controllerAs: "vm",
    controller: function () {
      var vm = this;
    },
    templateUrl: "jokes/greeting-component.html",
  });
})();
