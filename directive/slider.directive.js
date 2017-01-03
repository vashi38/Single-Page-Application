var dir = angular.module("myDrirectives",[]);
dir.directive("mySlider",function(){
	return{
		restrict:'E',
		scope:{
			object:'=object'
		},
		templateUrl:'directive/slider.html'
	}
});