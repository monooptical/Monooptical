(function($){
	$( document ).ready(function(){
		
		$(".icon-nav > a").animate({ opacity: .5 }, 1000);
		
		$(".icon-nav > a").mouseover(function(){
			$(this).doTimeout( "a", 250, function(elem){
				$(this).animate({ opacity: 1 }, 100);
				$(this).effect("bounce", { times:3 }, 200, function() {
					// Animation complete.
					$(".tip", this).show(50);
				});
			}, this);
			
		});
		$(".icon-nav > a").mouseout(function(){
			$(this).doTimeout( "a", 50, function(elem){
				$(this).animate({ opacity: .5 }, 100, function() {
					// Animation complete.
					$(".tip", this).hide(50);
				});
			}, this);
			
		});
	});
}( jQuery ));