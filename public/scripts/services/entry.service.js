/***
 * EntryService - Factory for handling the entries in the database
 *
 */
angular
    .module('TrackWorkApp')
    .factory('EntryService', ['$q', '$http', EntryService]);

function UserService($sessionStorage, $q, $http) {
  return {
    'get': get,
    'getAll': getAll,
    'add': add,
    'update': update,
    'remove': remove
  };

  function get(entryID){
    return $q(function(resolve, reject){
      $http.get('/entries/get', {'entryID': entryID})
        .then(function(data){
          // Success
        }, function(data){
          // Error
        });
    });
  }

  function getAll(){

  }

  function add(entryData){

  }

  function update(entryData, entryID){

  }

  function remove(entryID){

  }
}
