var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  $scope.name = "Pavel"
  $scope.last = "Zanchuk"
  $scope.myFunction = function(){
    return $scope.name + this.last;
  }

  console.log($scope);
  
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

console.log(typeof(searchPeople));
console.log(typeof(searchPeopleString));