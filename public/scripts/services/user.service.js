/***
 * UserService - Factory for handling the user
 *
 */
angular
    .module('TrackWorkApp')
    .factory('UserService', ['$sessionStorage', '$q', '$http', UserService]);

function UserService($sessionStorage, $q, $http) {
  return {
    'register': register,
    'login': login,
    'logout': logout,
    'user': getUser,
    'update': updateUser,
    'isAuthenticated': isAuthenticated,
    'isAdmin': isAdmin
  };

  function register(user){
    return $q(function(resolve, reject){
      $http.post('/user/register', user)
        .then(function(data, status){
          // Success
          if(data.status == 200){
            resolve(data.data.message);
          } else {
            reject(data.data.message);
          }
        }, function(data){
          // Failure
          reject(data.data.message);
        });
    });
  }

  function login(email, password){
    return $q(function(resolve, reject){
      $http.post('/user/login', { 'email': email, 'password': password })
        .then(function(data){
          // Success
          $sessionStorage.user = {
            "email": email,
            "accesstoken": data.data.accesstoken,
            "firstname": data.data.firstname,
            "lastname": data.data.lastname,
            "created": data.data.created,
            "isAdmin": data.data.isAdmin
          };
          resolve(data.data.message);
        }, function(data){
          // Fail
          reject(data.data.message);
        });
    });
  }

  function logout(){
    delete $sessionStorage.user;
  }

  function getUser(){
    return $sessionStorage.user;
  }

  function updateUser(updatedContent){
    return $q(function(resolve, reject){
      var user = getUser();

      var send = {
        'updatedContent': updatedContent,
        'accesstoken': user.accesstoken,
        'user': user.email
      };

      $http.post('/user/update', send)
        .then(function(data){
          // Success
          if(data.status == 200){
            resolve(data.data.message);
          } else {
            reject(data.data.message);
          }
        }, function(data){
          // Failure
          reject(data.data.message);
        });
    });
  }

  function isAuthenticated(){
    var isAuthenticated = false;

    if($sessionStorage.user){
      isAuthenticated = true;
    }

    return isAuthenticated;
  }

  function isAdmin(){
    var isAdmin= false;

    if(isAuthenticated() && $sessionStorage.user.isAdmin){
      isAdmin = true;
    }

    return isAdmin;
  }
}
