function MainController($scope){
  $scope.demo = "Hello";
  $scope.tasks = [];
  console.log("something");

  $scope.addTask = function(task){
    $scope.tasks.push(task);
    $scope.newTask = {};
    console.log("another something");
  }
}

// (function(){
//   var toDoList = angular.module("toDoList", []);
//   toDoList.controller("toDoListController", function(){
//     this.entry = task;
//     console.log("something is happening")
//   });
//
//   var newTask = {
//     name: "",
//     active: true
//   }
//
// })
