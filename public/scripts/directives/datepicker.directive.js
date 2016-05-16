/**
* @desc datepicker directive for form-input
* @example <input datepicker type="text" ng-model="scope.model"></input>
*/
angular
    .module('TrackWorkApp')
    .directive('datepicker', datePicker);

function datePicker($filter) {

  function pickDate(scope, element, attrs, ngModelController) {
    element.datetimepicker({
      format: 'YYYY-MM-DDTHH:mmZ'
    })
    .change(dateChanged)
    .on('dp.change', dateChanged);

    function dateChanged(ev) {
      element.trigger('change');
      scope.model = ev.currentTarget.value;
    }

    ngModelController.$parsers.push(function(data) {
      //convert data from view format to model format
      var date = new Date(data);
      return date.getTime(); //converted
    });

    ngModelController.$formatters.push(function(data) {
      //convert data from model format to view format
      return $filter('date')(data, 'yyyy-MM-dd HH:mm'); //converted
    });
  }

  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
        model: '=ngModel'
    },
    link: pickDate
  };
}
