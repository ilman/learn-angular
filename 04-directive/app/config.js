var myApp = angular.module('myApp', ['ui.router']);

myApp.directive('justTest', ['$rootScope', function($rootScope){
	return {
	    restrict: 'EA',
	    templateUrl: 'app/directives/just-test.html',
	    link: function(scope, iElement, attrs) {
	        //attrs references any attributes on the directive element in html

	        //iElement is the actual DOM element of the directive,
	        //so you can bind to it with jQuery
	        // $(iElement).bxSlider({
	        //     mode: 'fade',
	        //     captions: true
	        // });

	        //OR you could use that to find the element inside that needs the plugin
	        // $(iElement).find('.bx-wrapper').bxSlider({
	        //     mode: 'fade',
	        //     captions: true
	        // });

		}
    };
}])