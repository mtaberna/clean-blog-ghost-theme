/*!22
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under MIT (https://spdx.org/licenses/MIT)
 */

// Tooltip Init
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});

// Contact Form Scripts

$(function() {

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

// make all images responsive
$(function() {
	$("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});

/*!

Name: Reading Time
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 14, 2013
Date Updated: June 10, 2014
Licensed under the MIT license

*/
;(function(a){a.fn.readingTime=function(r){if(!this.length){return this}var h={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:true,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null};var i=this;var c=a(this);i.settings=a.extend({},h,r);var e=i.settings.readingTimeTarget;var d=i.settings.wordCountTarget;var k=i.settings.wordsPerMinute;var p=i.settings.round;var b=i.settings.lang;var l=i.settings.lessThanAMinuteString;var o=i.settings.prependTimeString;var f=i.settings.prependWordString;var g=i.settings.remotePath;var n=i.settings.remoteTarget;if(b=="it"){var m=l||"Meno di un minuto";var q="min"}else{if(b=="fr"){var m=l||"Moins d'une minute";var q="min"}else{if(b=="de"){var m=l||"Weniger als eine Minute";var q="min"}else{if(b=="es"){var m=l||"Menos de un minuto";var q="min"}else{if(b=="nl"){var m=l||"Minder dan een minuut";var q="min"}else{var m=l||"Less than a minute";var q="min"}}}}}var j=function(y){var v=y.trim().split(/\s+/g).length;var u=k/60;var s=v/u;if(p===true){var x=Math.round(s/60)}else{var x=Math.floor(s/60)}var w=Math.round(s-x*60);if(p===true){if(x>0){a(e).text(o+x+" "+q)}else{a(e).text(o+m)}}else{var t=x+":"+w;a(e).text(o+t)}if(d!==""&&d!==undefined){a(d).text(f+v)}};c.each(function(){if(g!=null&&n!=null){a.get(g,function(s){j(a("<div>").html(s).find(n).text())})}else{j(c.text())}})}})(jQuery);

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});