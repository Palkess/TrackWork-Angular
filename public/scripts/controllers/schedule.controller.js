/***
 * ScheduleController - Controller for schedule.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ScheduleController',['$sessionStorage', 'EntryService', ScheduleController]);

function ScheduleController($sessionStorage, EntryService) {
  var vm = this;

  EntryService.getAll()
    .then(function(data){
      // Success

      // Sort the entries after day for a pretty display in the partial
      var entries = {};

      for(x in data){
        // Get the date, not pretty but it works
        var date = moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").year();
        date += '-' + (moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").month() < 10 ? '0' + moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").month() : moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").month());
        date += '-' + (moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").day() < 10 ? '0' + moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").day() : moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").day());
        console.log(moment(data[x].start, "YYYY-MM-DDTHH:mm:ssZ").local().month());
        if(date in entries){
          entries[date].push(data[x]);
        } else {
          entries[date] = [];
          entries[date].push(data[x]);
        }
      }
      vm.entries = entries;
    }, function(message){
      // Error
      console.error(message);
    });

  // Set this to vm.entries for example data
  var exampleEntries = {
    '2016-04-14': [
      {
        'description': 'Did some stuff',
        'start': '2016-04-14T12:00Z',
        'end': '2016-04-14T14:00Z',
        'overtime': true
      },
      {
        'description': 'Did some more stuff',
        'start': '2016-04-14T16:00Z',
        'end': '2016-04-14T19:00Z',
        'overtime': false
      }
    ],
    '2016-04-13': [
      {
        'description': 'Did some stuff',
        'start': '2016-04-13T12:00Z',
        'end': '2016-04-13T14:00Z',
        'overtime': true
      },
      {
        'description': 'Did some more stuff',
        'start': '2016-04-13T16:00Z',
        'end': '2016-04-13T19:00Z',
        'overtime': false
      }
    ]
  };

  vm.save = function() {
    var date = new Date(vm.start);
    if(!vm.entries) {
      vm.entries = {};
    }
    if(!vm.entries[moment(date).format('YYYY-MM-DD')]) {
      vm.entries[moment(date).format('YYYY-MM-DD')] = [];
    }

    EntryService.add({
      'description': vm.description,
      'start': vm.start,
      'end': vm.end,
      'overtime': vm.overtime ? vm.overtime : false,
      'holiday': false
    });

    console.log($sessionStorage.user);

    vm.description = '';
    vm.start = '';
    vm.end = '';
    vm.overtime = false;
  };
}
