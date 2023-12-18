$(document).ready(function () {
	
	$("body").on("click", ".navbar ul.navbar-nav a.disabled", function(e) {
    e.preventDefault();	
		
	});
	
	

    $('.navbar .dropdown-item span.dropdown-toggle').on('click', function (e) {
        var $parentli=$(this).parent("li");
        
        var $el = $parentli.children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $parentli.parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({"top": -999, "right": -999});
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({"top": $el[0].offsetTop, "right": $parent.outerWidth() - 0});
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });
	
		

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });
	

});