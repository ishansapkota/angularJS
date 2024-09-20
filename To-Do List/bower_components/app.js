var myTestApp = angular.module('myTestApp',['ngRoute'])


myTestApp.config(['$routeProvider',function($routeProvider)
{
    $routeProvider
    .when('/home',{
        templateUrl : '/features/home/home.html',
        controller: 'TestController'
    })
    .when('/add',{
        templateUrl:'features/add/add.html',
        controller:'TestController'
    })
    .when('/update/:TodoIndex',{
        templateUrl:'features/update/update.html',
        controller:'TestController'
    })
    .otherwise(
        {
            redirectTo:'/home'
        }
    )
    
}])



myTestApp.controller('TestController',['$scope',function($scope)
{
    $scope.addTodo = function()
    {
        $scope.todos.push(
            {
                name:$scope.newtodo.name,
                urgency:parseInt($scope.newtodo.urgency)
            }
        )
        $scope.newtodo.name = ''
        $scope.newtodo.urgency = ''
    }

    $scope.removeTodo = function(todo)
    {
        var removedToDo = $scope.todos.indexOf(todo);
        $scope.todos.splice(removedToDo,1);
    };

    $scope.updateTodo = function(todo)
    {
        $scope.todos = {
            name:todo.name,
            urgency:todo.urgency
        }
    }
    // $scope.message = "Hello";
    // $scope.meats = ['Chicken','Buff','Pork']
    $scope.todos = [
        {
            name:"Learn JavaScript",
            urgency: 10
        },
        {
            name:"Learn AngularJS",
            urgency: 9
        }
    ]
}]);