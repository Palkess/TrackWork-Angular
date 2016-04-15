/***
 * ScheduleController - Controller for schedule.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ScheduleController', ScheduleController);

function ScheduleController() {
  var vm = this;

  vm.message = "Hi, I'm schedule";
}
