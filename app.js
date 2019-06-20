var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http){

  $scope.name = "Pavel"
  $scope.last = "Zanchuk"
  $scope.username = "robconery"

  $scope.myFunction = function(){
    return $scope.name + this.last;
  }

  $scope.search = function(username){
    $http.get("https://api.github.com/users/"+username)
    .then(function(response){
      $scope.userData = response.data;
    },function (response){
      $scope.error = "Could not fetch from API";
    });
  }
  
    console.log($scope);
    console.log($scope.username);
  
});



(function autoRun(){
  alert("I am autorun")
})();



function changeBgBack(){
  document.getElementById('change').style.backgroundColor = 'white'; 
}

function changeBg(color){
  document.getElementById('change').style.backgroundColor = color; 
  myVar = setTimeout(changeBgBack, 5000);
  
}

var searchPeople = function(first, last){
  return first + last;
}

var searchPeopleString = searchPeople.toString();

console.log("This is typeof(searchPeople) "+typeof(searchPeople));
console.log("This is searchPeopleToString "+searchPeopleString);