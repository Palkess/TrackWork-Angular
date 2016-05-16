/***
 * ScheduleController - Controller for schedule.template.html
 *
 */
angular
    .module('TrackWorkApp')
    .controller('ScheduleController', ScheduleController);

function ScheduleController() {
  var vm = this;

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

    vm.entries[moment(date).format('YYYY-MM-DD')].push({
      'description': vm.description,
      'start': vm.start,
      'end': vm.end,
      'overtime': vm.overtime ? vm.overtime : false
    });

    vm.description = '';
    vm.start = '';
    vm.end = '';
    vm.overtime = false;
  };
}
