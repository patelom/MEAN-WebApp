'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				colour:'btn-success',
				total:'A',
				description:'Grid'
			},
			{
				icon:'glyphicon-calendar',
				colour:'btn-primary',
				total:'B',
				description:'Grid'
			},
			{
				icon:'glyphicon-edit',
				colour:'btn-success',
				total:'C',
				description:'Grid'
			},
			{
				icon:'glyphicon-record',
				colour:'btn-info',
				total:'D',
				description:'Grid'
			},
			{
				icon:'glyphicon-eye-open',
				colour:'btn-warning',
				total:'E',
				description:'Grid'
			},
			{
				icon:'glyphicon-flag',
				colour:'btn-danger',
				total:'F',
				description:'Grid'
			}

		];

	}
]);
