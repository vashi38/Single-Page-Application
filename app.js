var app = angular.module('MyApp',['myDrirectives']);

app.controller("sliderController",function($timeout,$scope){
	
	$timeout(function(){
		var ele = document.getElementById('ad');
		ele.style.right="5";
	},100);
	
	$scope.obj = {
	'header':'White Dress',
	'stories':[{
		'img1':'images/g2.jpg',
		'img2':'images/g3.jpg',
		'desc':'Cotton White Dresses'
	},
	{
		'img1':'images/r2.jpg',
		'img2':'images/r3.jpg',
		'desc':'Cotton  Dresses'
	}]
};

})