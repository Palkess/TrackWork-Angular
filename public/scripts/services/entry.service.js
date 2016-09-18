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

  /**
   * Get one entry from the database
   * @entryID - Id of the entry
   * returns a promise
   *
   */
  function get(entryID){
    // This function is retarded, remake to a post or git gud
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

  /**
   * Get all entries from the database
   * returns a promise
   *
   */
  function getAll(){
    return $q(function(resolve, reject){
      var owner = $sessionStorage.user.email;
      $http.post('/entries/getAll', {'owner': owner})
        .then(function(data){
          // Success

          resolve(data.data.documents);
        }, function(data){
          // Error

          reject(data['message']);
        });
    });
  }

  /**
   * Adds a new entry in the database
   * @entryData - Containing data of the entry
   * returns a promise
   *
   */
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

  /**
   * Updates an entry in the database
   * @entryData - Containing updated data of the entry
   * @entryID   - Id of the entry to be updated
   * returns a promise
   *
   */
  function update(entryData, entryID){
    return $q(function(resolve, reject){
      $http.post('/entries/update', {'entryID': entryID, 'entryData': entryData})
        .then(function(data){
          // Success

          resolve();
        }, function(data){
          // Error

          reject();
        });
    });
  }

  /**
   * Removes one entry from the database
   * @entryID - Id of the entry
   * returns a promise
   *
   */
  function remove(entryID){
    return $q(function(resolve, reject){
      $http.post('/entries/remove', {'entryID': entryID})
        .then(function(data){
          // Success

          resolve(data.data.message);
        }, function(data){
          // Error

          reject(data.data.message);
        });
    });
  }
}
