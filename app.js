var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {
	
	'use strict';
	$scope.rssString = 'test';
	$scope.hasImage = true;

//	$scope.searchPriceMin
//	$scope.searchPriceMax

	
	$scope.outputRssString1 = function () {
		var includeParam = '';

		if ($scope.hasImage) {
			includeParam += '&hasPic=1';
		}

		if ($scope.searchPriceMin) {
			includeParam += '&min_price=' + $scope.searchPriceMin;
		}
		if ($scope.searchPriceMax) {
			includeParam += '&max_price=' + $scope.searchPriceMax;
		}
		
		return 'http://toronto.craigslist.ca/search/sss?query=' + escape($scope.searchTerm) + '&sort=rel&format=rss' + includeParam;
	};

	$scope.outputRssString2 = function () {
		var includeParam = '';
		var priceMin = '';
		var priceMax = '';

		if ($scope.hasImage) {
			includeParam += '&minNumberOfImages=1';
		}
		if ($scope.searchPriceMin || $scope.searchPriceMax) {
			includeParam += '&price=' + $scope.searchPriceMin + '__' + $scope.searchPriceMax;
		}
		
		return 'http://www.kijiji.ca/rss-srp-city-of-toronto/' + $scope.searchTerm.replace(/\s/gi,'-') + '/k0l1700273?' + includeParam;
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
