/***
 * ScheduleController - Controller for schedule.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ScheduleController',['$sessionStorage', 'EntryService', ScheduleController]);

function ScheduleController($sessionStorage, EntryService)   {
  var vm = this;

  /**
   * Retrieves the entries from database and puts them into the view
   *
   */
  function fetchEntries() {
    EntryService.getAll()
      .then(function(data){
        // Success

        if(data.length > 0){
          var entries = {};

          // Sort the entries after day for a pretty display in the partial
          for(x in data){
            // Get the date
            var date = moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").format('YYYY-MM-DD');

            if(date in entries){
              entries[date].push(data[x]);
            } else {
              entries[date] = [];
              entries[date].push(data[x]);
            }
          }
          vm.entries = entries;
        } else {
          vm.entries = null;
        }
      }, function(message){
        // Error
        console.error(message);
      });
  }

  /**
   * Takes the input values from the view
   * and saves it as an entry in the database.
   *
   */
  vm.save = function() {
    var date = new Date(vm.start);
    if(!vm.entries) {
      vm.entries = {};
    }

    // Add promise handling, not sure why it isn't here
    EntryService.add({
      'description': vm.description,
      'start': vm.start,
      'end': vm.end,
      'overtime': vm.overtime ? vm.overtime : false,
      'holiday': false
    })
    .then(function(data) {
      fetchEntries();
    }, function(err) {
      console.log(err);
    });

    vm.description = '';
    vm.start = '';
    vm.end = '';
    vm.overtime = false;
  };

  /*
   * Removes an entry in the database
   * @entryID - Id-string of the chosen entry in the view
   *
   */
  vm.remove = function(entryID) {
    EntryService.remove(entryID)
      .then(function(message) {
        // Success
        alert(message);

        fetchEntries();
      }, function(message) {
        // Error
        alert(message);
      });
  };

  fetchEntries();
}
