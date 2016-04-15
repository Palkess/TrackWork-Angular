/***
 * ReportsController - Controller for reports.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ReportsController', ReportsController);

function ReportsController() {
  var vm = this;

  vm.message = "Hi, I'm reports";
}
