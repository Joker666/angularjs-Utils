var App = app.module('ExampleApp', []);

App.service('Tree', function(){
  this.rebuild = false;

  this.Build = function(cb){
    cb(response);
  };

  return this;
});


App.directive('treeView', function(Tree){
  return {

    restrict: 'A',

    link: function(scope, elem, attrs){
      scope.data = [];

      scope.$watch(function(){

        return Tree.rebuild;

      },function(newVal, oldVal){
        if(newVal) {
            Tree.Build(function(response){
           		scope.data = response;
           		Tree.rebuild = false;
            });
        };
      });
    }
  }
});
