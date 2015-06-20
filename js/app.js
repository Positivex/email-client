var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function($mdThemingProvider, $mdIconProvider){
	$mdIconProvider
		.defaultIconSet("./images/svg/avatars.svg", 128)
		.icon("menu"       , "./images/svg/menu.svg"        , 24)
		.icon("share"      , "./images/svg/share.svg"       , 24)
		.icon("settings"   , "./images/svg/settings.svg"    , 24)
		.icon("home"       , "./images/svg/home.svg"        , 24)
		.icon("google_plus", "./images/svg/google_plus.svg" , 512)
		.icon("hangouts"   , "./images/svg/hangouts.svg"    , 512)
		.icon("phone"      , "./images/svg/phone.svg"       , 512);

	$mdThemingProvider.theme('default')
		.primaryPalette('indigo')
		.accentPalette('pink');
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.when('/settings', {
			templateUrl: 'templates/settings.html',
			controller: 'SettingsController'
		})
		.otherwise({redirectTo: '/'})
});

app.controller('HomeController', function() {
	
})

app.controller('SettingsController', function() {
	
})
