var myApp = angular.module('editableContentMod', []);

myApp.run(function($rootScope) {
});

myApp.directive('editableContent', function() {
   return {
      restrict: 'E',
      replace: true,
      templateUrl: './editable-content.html'
   }
});

myApp.directive('makeEditable', function() {
   return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
         //
         //
         console.log('star of makeEditable');
         //
         //
         var textBlock = element.find('p');
         console.dir(textBlock);
         
         scope.buttonState = "Edit";
         scope.toggleEdit = function() {
            console.log('toggleEdit');
            scope.buttonState == "Edit" ? enterEditMode() : exitEditMode();
         };

         function enterEditMode() {
            //
            console.log('start of enterEditMode');
            //
            scope.buttonState = "Save";
            textBlock.attr('contenteditable', 'true');
            //
            console.log('end of enterEditMode');
            //
         }
         function exitEditMode() {
            //
            console.log('start of exitEditMode');
            //
            scope.buttonState = "Edit";
            textBlock.attr('contenteditable', 'false');
            //
            console.log('end of exitEditMode');
            //
         }
         //
         //
         console.log('end of makeEditable');
         //
         //
      }
   }
});