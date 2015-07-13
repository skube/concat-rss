var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {
	
	'use strict';
	$scope.rssString = 'test';

//	$scope.searchPriceMin
//	$scope.searchPriceMax
//	$scope.hasImage

	$scope.outputRssString1 = function () {
		var includeImgParam = '';
		if ($scope.hasImage) {
			includeImgParam = '&hasPic=1';
		}
		return 'http://toronto.craigslist.ca/search/sss?' + $scope.searchTerm + '&sort=rel&format=rss' + includeImgParam;
	};

	$scope.outputRssString2 = function () {
		var includeImgParam = '';
		if ($scope.hasImage) {
			includeImgParam = '?&minNumberOfImages=1';
		}
		return 'http://www.kijiji.ca/' + $scope.searchTerm + '/k0l1700273' + includeImgParam;
	};


}]);

/*

http://toronto.craigslist.ca/search/sss?
hasPic=1
&max_price=900
&min_price=100
&query=mac%20mini%20i7%20quad
&sort=rel
&format=rss

http://www.kijiji.ca/rss-srp-city-of-toronto/mac-mini-i7-quad/k0l1700273?
price=100__900
&minNumberOfImages=1
*/
