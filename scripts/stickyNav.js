function stickNavBar() {
    var windowTop = $(window).scrollTop();
    var divTop = $('#stickyNavAnchor').offset().top;
    if (windowTop > divTop) {
		/* stick nav bar to top of page */
		$('#stickyNavAnchor').height($('#stickyNav').outerHeight());
        $('#stickyNav').addClass('stuck');
	} 
	else {
		/* put nav bar back */
        $('#stickyNav').removeClass('stuck');
        $('#stickyNavAnchor').height(0); 
	}
}

$(function() {
    $(window).scroll(stickNavBar);
    stickNavBar();
});
