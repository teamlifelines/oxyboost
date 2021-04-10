$( document ).ready(function() {
	$('#banner-slier').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false
	});
	$('#banner-testmonial').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false
	});
	$('#about-slier').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  responsive: 
	  [
	    {
	      breakpoint: 991,
	      settings: {
	        arrows: false,
	        
	       
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,  
	     
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false,  
	     
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('#other-services').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: true,
	  responsive: 
	  [	   
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,  
	     
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});

	
(function($) { 
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
})(jQuery);

$(window).scroll(function(event) {
  
  $(".animated").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fadeIn"); 
    } else {
      el.removeClass("fadeIn");
    }
  });
  
});
