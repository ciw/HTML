jQuery.noConflict()(function($){
$(document).ready(function() { 
 var originalFontSize = $('body').css('font-size');
 $(".resetFont").click(function(){
 $('body').css('font-size', originalFontSize);
 });
 $(".increaseFont").click(function(){
 var currentFontSize = $('body').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
 var newFontSize = currentFontSizeNum+1;
 $('body').css('font-size', newFontSize);
 return false;
 });
 $(".decreaseFont").click(function(){
 var currentFontSize = $('body').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
 var newFontSize = currentFontSizeNum-1;
 $('body').css('font-size', newFontSize);
 return false;
 });
})
});

jQuery.noConflict()(function($){
$(document).ready(function() { 
 var originalFontSize = $(':header').css('font-size');
 $(".resetFontHeader").click(function(){
 $(':header').css('font-size', originalFontSize);
 });
 $(".increaseFontHeade").click(function(){
 var currentFontSize = $(':header').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
 var newFontSize = currentFontSizeNum+1;
 $(':header').css('font-size', newFontSize);
 return false;
 });
 $(".decreaseFontHeader").click(function(){
 var currentFontSize = $(':header').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
 var newFontSize = currentFontSizeNum-1;
 $(':header').css('font-size', newFontSize);
 return false;
 });
})
});
jQuery.noConflict()(function($){
$(document).ready(function() {
$("#switcher-handle > #handle").toggle
(
function()
{
$('#switcher-handle').animate({left:'0px'}, {queue:false,duration:700});
$('#switcher-handle > #handle').addClass('out');
}
,function()
{
$('#switcher-handle').animate({left:'-172px'}, {queue:false,duration:500});
$('#switcher-handle > #handle').removeClass('out');
}
);


});
});
jQuery.noConflict()(function($){
$(document).ready(function() {
$('#body-font').bind('change', function() {
var font = $(this).val();
 $('p, a ,#main_navigation, span, ul ,li , ol').css('fontFamily', font);
 
});
});
});

jQuery.noConflict()(function($){
$(document).ready(function() {
$('#headings-font').bind('change', function() {
var font = $(this).val();
 $(':header, :header a, a:header, span:header, :header span').css('fontFamily', font);
 
});
});
});



/***************************************************
		ANYTHING SLIDER
***************************************************/
jQuery.noConflict()(function($){
		$(document).ready(function() {
		$(function(){
		
			$('#main-slider').anythingSlider({
				startStopped    : false, // If autoPlay is on, this can force it to start stopped
				hashTags        : false,
				toggleArrows    : true,
				buildArrows     : true,
				enablePlay      : true,      // if false, the play/stop button will still be visible, but not clickable.
				autoPlayLocked  : false,  // If true, user changing slides will not stop the slideshow
				resumeDelay     : 10000, // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds).
				easing          : "swing",   // Anything other than "linear" or "swing" requires the easing plugin
				delay           : 4500,      // How long between slideshow transitions in AutoPlay mode (in milliseconds) /*Custom JavaScript - TrendyWebStar*/
				animationTime   : 600,
				easing: 'easeInOutExpo'	,		// How long the slideshow transition takes (in milliseconds)
				onSlideComplete : function(slider){
					// alert('Welcome to Slide #' + slider.currentPage);
				}
			});
		});
	});
});
/***************************************************
		Nivo Slider
***************************************************/
jQuery.noConflict()(function($){
	jQuery(document).ready(function($){
	$(window).load(function() {
        $('#slider').nivoSlider();
    });
});
});
jQuery.noConflict()(function($){
jQuery(window).bind("load", function() {
		jQuery('.slideimage:hidden').fadeIn(2000);
		jQuery(".kwicks.horizontal li").css('background', '#FFF');
		jQuery('.accordian-slider-caption').show();
		jQuery('.accordian-slider-captiontitle').show();
		
		jQuery('.kwicks').kwicks({
			max : 875,
			spacing : 0
		});
	jQuery(function(){
		jQuery(".accordian-slider-caption").fadeTo(1, 0);
		jQuery(".slide-minicaption").fadeTo(1, 0.9);
		jQuery(".kwicks").each(function () {
			jQuery(".kwicks").hover(function() {
			jQuery('.accordian-slider-caption').stop().animate({opacity: 0.9, left: '50'}, 900 );
			
			},function(){
			jQuery('.accordian-slider-caption').stop().animate({opacity: 0, left: '930'}, 900 );
			
			});
		});
	});
});
});
/***************************************************
		Slide to Anchor
***************************************************/
jQuery.noConflict()(function($){
	$(document).ready(function() {  
			$("#Blueprint").anchorScroll();
			$("#Web").anchorScroll();
			$("#Development").anchorScroll();
			$("#SEO").anchorScroll();
			$("#Hosting").anchorScroll();
			$("#shop").anchorScroll();
		});
		});

/***************************************************
		TABS JAVASCRIPT
***************************************************/
jQuery.noConflict()(function($){
jQuery(document).ready(function($){
	//Default Action
	$(".tab-content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab-content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab-content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});
});
/***************************************************
		CYCLE SLIDER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
    $('#typograpy-test').cycle({
		fx:     'scrollDown', 
		prev:    '#prev',
        next:    '#next',
		easing: 'bounceout', 
		delay:  -2000 
		
		
       
	});
	
	});
});

/***************************************************
		CYCLE SLIDE
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
    $('#testimonials').cycle({
		fx:      'scrollDown',
		speedIn:  800, 
		speedOut: 800, 
		delay:   7000
		
	});
});
});

/***************************************************
		CYCLE SLIDER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
    $('#details').cycle({
		fx:     'fade', 
        prev:    '#prev',
        next:    '#next',
		speedIn:  800, 
		speedOut: 800, 
		delay:   7000
       
	});
	
	});
});

/***************************************************
		PRETTY PHOTO
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {  

$("a[rel^='prettyPhoto']").prettyPhoto({opacity:0.80,default_width:500,default_height:344,theme:'light_rounded',hideflash:false,modal:false});

});
});

/***************************************************
		SIMPLE TOOLTIPS
***************************************************/
jQuery.noConflict()(function($){
	$(document).ready(function(){
	$("#social-1").simpletooltip();
	$("#social-2").simpletooltip();
	$("#social-3").simpletooltip();
	$("#social-4").simpletooltip();
	$("#social-5").simpletooltip();
	$("#social-6").simpletooltip();
	$("#social-7").simpletooltip();
	$("#social-8").simpletooltip();
	$("#social-9").simpletooltip();
	$("#social-10").simpletooltip();
	$("#social-11").simpletooltip();
	$("#social-12").simpletooltip();
	/*BLOSH SHARE POST*/
	$("#social-13").simpletooltip();
	$("#social-14").simpletooltip();
	$("#social-15").simpletooltip();
	$("#social-16").simpletooltip();
	$("#social-17").simpletooltip();
	$("#social-18").simpletooltip();
	$("#social-19").simpletooltip();
	$("#social-20").simpletooltip();
	$("#social-21").simpletooltip();
	$("#social-22").simpletooltip();
	$("#social-23").simpletooltip();
	$("#social-24").simpletooltip();
	/*-----------------------------*/
	$("#color-1").simpletooltip();
	$("#color-2").simpletooltip();
	$("#color-3").simpletooltip();
	$("#color-4").simpletooltip();
	$("#color-5").simpletooltip();
	$("#color-6").simpletooltip();
	$("#color-7").simpletooltip();
	$("#color-8").simpletooltip();

	
	
	  });
});

/***************************************************
		TWITTER FEEDS
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() { 
$(".tweet").tweet({
            username: "trendywebstar",
            join_text: null,
            avatar_size: null,
            count: 1,
            auto_join_text_default: "we said,", 
            auto_join_text_ed: "we",
            auto_join_text_ing: "we were",
            auto_join_text_reply: "we replied to",
            auto_join_text_url: "we were checking out",
            loading_text: "loading tweets..."
    });
	});
});

/***************************************************
		PORTFOLIO IMAGE HOVER
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {  
            $('.portfolio-img').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.5 }, 600);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 400);
                   })
                });
});
});


/***************************************************
		FORM VALIDATION JAVASCRIPT
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
	$('form#contact-form').submit(function() {
		$('form#contact-form .simple-error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<div class="simple-error">You forgot to enter your '+labelText+'</div>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<div class="simple-error">You entered an invalid '+labelText+'</div>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			$('form#contact-form input.submit').fadeOut('normal', function() {
				$(this).parent().append('');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contact-form').slideUp("fast", function() {
					$(this).before('<p class="simple-success">Your email was successfully sent. We will contact you as soon as possible.</p>');
				});
			});
		}

		return false;

	});
});
});

/***************************************************
		MAIN NAVIGATION JQURY
***************************************************/
/*********************
//* jQuery Multi Level CSS Menu #2- By Dynamic Drive: http://www.dynamicdrive.com/
//* Last update: Nov 7th, 08': Limit # of queued animations to minmize animation stuttering
//* Menu avaiable at DD CSS Library: http://www.dynamicdrive.com/style/
*********************/

var arrowimages={down:['', ''], right:['', '']}
var jqueryslidemenu={

animateduration: {over: 200, out: 200}, //duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid, arrowsvar){
	jQuery(document).ready(function($){
		$(" #main_navigation a").removeAttr("title");
		var $mainmenu=$("#"+menuid+">ul")/*Custom JavaScript - TrendyWebStar*/
		var $headers=$mainmenu.find("ul").parent()
		$headers.each(function(i){
			var $curobj=$(this)
			var $subul=$(this).find('ul:eq(0)')
			this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false
			$subul.css({top:this.istopheader? this._dimensions.h+"px" : 0})
			
			var $targetul=$(this).children("ul:eq(0)")
			this._offsets={left:$(this).offset().left, top:$(this).offset().top}
			var menuleft=this.istopheader? 0 : this._dimensions.w
			menuleft=(this._offsets.left+menuleft+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) + 12 : menuleft
			if ($targetul.queue().length<=1) //if 1 or less queued animations/*Custom JavaScript - TrendyWebStar*/
				if(menuleft==0){
					$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).removeClass("menu_flip")
				}
				if(menuleft!=0 && this.istopheader){
					$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).addClass("menu_flip")
				}else{
					$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).removeClass("menu_flip")
				}
			
			$curobj.hover(
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					this._offsets={left:$(this).offset().left, top:$(this).offset().top}
					var menuleft=this.istopheader? 0 : this._dimensions.w
					menuleft=(this._offsets.left+menuleft+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) + 12 : menuleft
					if ($targetul.queue().length<=1) //if 1 or less queued animations
						if(menuleft==0){
							$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).removeClass("menu_flip").slideDown(jqueryslidemenu.animateduration.over)
						}
						if(menuleft!=0 && this.istopheader){
							$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).addClass("menu_flip").slideDown(jqueryslidemenu.animateduration.over)
						}else{
							$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).removeClass("menu_flip").slideDown(jqueryslidemenu.animateduration.over)
						}
				},
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					$targetul.slideUp(jqueryslidemenu.animateduration.out)
				}
			) //end hover
		}) //end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible'})/*Custom JavaScript - TrendyWebStar*/
	}) //end document.ready
}
}

//build menu with ID="main_navigation" on page:
jqueryslidemenu.buildmenu("main_navigation", arrowimages)
/*Custom JavaScript - TrendyWebStar*/


jQuery.noConflict()(function($){
jQuery(document).ready(function($){
var 
speed = 700, 
$wall = $('#portfolio').find('.portfolio-container ul');
$wall.masonry({
singleMode: true,
itemSelector: '.column-220:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});
$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else { 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});
});
});