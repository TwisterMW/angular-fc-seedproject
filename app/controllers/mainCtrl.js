(function(){
	'use-strict';

	angular
		.module('App.main')
		.controller('MainCtrl', MainCtrl);

	/**
		* @ngdoc controller
		* @name MainCtrl 
		* @function
		*
		* @description
		* Main controller of application, saves all the root application context
		*
	*/
	function MainCtrl(){
		var vm = this;

		// Declaration
		vm.init = init;

		// Definition
		function init(){
			
		}

		vm.init();
	}

})();