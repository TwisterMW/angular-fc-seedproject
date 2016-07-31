(function(){
	'use-strict';

	angular
		.module('App.main')
		.controller('MainCtrl', MainCtrl);

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