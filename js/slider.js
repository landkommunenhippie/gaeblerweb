$(document).ready(function(){

    initMap();

    $('#main-nav a[href*="#"]:not([href="#"]), .smooth-scroll').click(function() {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
        }
    }
    });
    
});
 
$.fn.exists = function(){
    return this.length !== 0;
}

var initMap = function(){
	let map = new GMaps({
		div: '#gw-map',
		lat: 50.64421,
		lng: 11.36219,
		zoom: 18,
		scrollwheel: false,
		clickableIcons: false
		});

		map.addMarker({
		lat: 50.644450,
		lng: 11.36320,
		title: 'Zimmervermietung Gäbler',
		icon: "images/mapicon_small.png"
    });
}
