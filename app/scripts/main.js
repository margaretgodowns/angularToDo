function MainController($scope){
  $scope.tasks = [];
  console.log("MainController function working");

  $scope.addTask = function(task){
    $scope.tasks.push(task);
    $scope.newTask = {};
    console.log("addTask function working");
  }

  $scope.deleteTask = function(task){
    $scope.tasks.splice($scope.lists.indexOf(task), 1);
    console.log("deleteTask function working");
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
