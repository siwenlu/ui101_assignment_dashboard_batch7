'use strict';
angular.module('dbApp',[
	'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
	'ui.router',
	'ui.bootstrap'
	])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	 	.state('login',{
			url:'/login',
			templateUrl:'templates/login.html',
			controller:'login'
		})
		.state('root',{
			//url:'/root',
			templateUrl:'templates/root.html',
			controller:'rootController'
		})
		.state('root.overview',{
			url:'/root/overview',
			templateUrl:'templates/overview.html',
			controller:'overview'
		})
		.state('root.work',{
			url:'/root/work',
			templateUrl:'templates/work.html',
			controller:'work'
		})
		.state('root.contact',{
			url:'/root/contact',
			templateUrl:'templates/contact.html',
			controller:'contact'
		})
		.state('root.producer',{
			url:'/root/producer',
			templateUrl:'templates/producer.html',
			controller:'producer'
		});

});