/***
 * ReportsController - Controller for reports.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ReportsController',['$sessionStorage', 'EntryService', ReportsController]);

function ReportsController(sessionStorage, EntryService) {
  var vm = this;
  vm.entries = [];

  EntryService.getAll()
    .then(function(data) {
      console.log(data);
      vm.entries = data;
    }, function(err) {
      console.log(err);
    });
}
