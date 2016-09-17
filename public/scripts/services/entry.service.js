/***
 * EntryService - Factory for handling the entries in the database
 *
 */
angular
    .module('TrackWorkApp')
    .factory('EntryService', ['$sessionStorage', '$q', '$http', EntryService]);

function EntryService($sessionStorage, $q, $http, UserService) {
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

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }

  function getAll(){
    return $q(function(resolve, reject){
      var owner = $sessionStorage.user.email;
      $http.get('/entries/getAll', {'owner': owner})
        .then(function(data){
          // Success

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }

  function add(entryData){
    return $q(function(resolve, reject){
      entryData.owner = $sessionStorage.user.email;

      $http.post('/entries/add', entryData)
        .then(function(data){
          // Success

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }

  function update(entryData, entryID){
    return $q(function(resolve, reject){
      $http.get('/entries/update', {'entryID': entryID, 'entryData': entryData})
        .then(function(data){
          // Success

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }

  function remove(entryID){
    return $q(function(resolve, reject){
      $http.get('/entries/remove', {'entryID': entryID})
        .then(function(data){
          // Success

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }
}
