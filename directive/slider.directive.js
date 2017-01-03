var dir = angular.module("myDrirectives",[]);
dir.directive("mySlider",function(){
	return{
		restrict:'E',
		scope:{
			object:'=object'
		},
		link:function(scope){
			scope.disable_slider = function(){
				document.getElementById('ad').style.right='-100%';
			}
		},
		templateUrl:'directive/slider.html'
	}
});