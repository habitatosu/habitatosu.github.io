$(document).ready(function(){		
	 //Isotope sorting
	 var $container = $('.projects');

	 $container.isotope({
		itemSelector : '.element',
		
	  });
		
	  var $optionSets = $('#options .option-set'),
		  $optionLinks = $optionSets.find('a');
	
	  $optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
		  return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	
		// make option object dynamically, i.e. { filter: '.my-filter-class' }
		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
		// parse 'false' as false boolean
		value = value === 'false' ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		  // changes in layout modes need extra logic
		  changeLayoutMode( $this, options )
		} else {
		  // otherwise, apply new options
		  $container.isotope(options);
		}
		
		return false;
	  });
	
		$container.isotope( 'reLayout', function(){myHover()} );
		var $container = $('.projects');
		$('.btn_load_more').click(function() {
			var count = $(this).attr('data-count');
			var $newEls = $(fakeElement.getGroup(count));
			
			$container.isotope('insert', $newEls, function() {
				$container.isotope('reLayout');
				myHover();					
			});
			$("a[data-rel^='prettyPhoto']").prettyPhoto(); 
			return false;
		});
	
		function myHover(){
			$(".hover_img .zoom, .hover_img .item_play, .hover_img .link").live('mouseover',function(){
					var myClass=$(this).attr('class');
					$(this).parent().find('span:not(.'+myClass+')').css({'background-position':'0 0'});
				}
			);
			$(".hover_img .zoom, .hover_img .item_play, .hover_img .link").live('mouseout',function(){
					var myClass=$(this).attr('class');
					$(this).parent().find('span:not(.'+myClass+')').css({'background-position':'0 -40px'});
				}
			);
			
		}
		$(".projects .element").preloader();
		
});










