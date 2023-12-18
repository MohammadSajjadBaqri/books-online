// JavaScript Document
$(document).ready(function () {


	    $('.navbar ul.navbar-nav li.nav-item a.nav-link').on('hover', function (e) {
        var $parentli=$(this).parent("li");
		var $childul = $parentli.children('ul.dropdown-menu');
		var $childspan = $parentli.children('span.dropdown-toggle');	
		
		$parentli.addClass('show');	
		$childul.addClass('show');
		$childspan.attr('aria-expanded','true');				
						
    });
	
});	