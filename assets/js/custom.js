jQuery(function(){
	jQuery('#menu').slicknav({
		label: 'menu',
		openedSymbol:"",
		closedSymbol:"",
		allowParentLinks: false,
		prependTo:'#menu_holder'
	});
});

(function($){
	jQuery(".menu_bar").click(function() { 
		jQuery('.mobile_menu').addClass('mobile_menu_open'); 
		jQuery('.mobile_menu').slideDown('slow');

        jQuery('.header_right_wrap').addClass('dealy_show');
	});
	jQuery(".menu_close").click(function() { 
		jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
		jQuery('.mobile_menu').slideUp('slow'); 
        
        jQuery('.header_right_wrap').removeClass('dealy_show');
	});

    jQuery(".event_btn_wrap .header_btn").click(function() { 
		jQuery('.events_list_wrap.events_hide_show').slideToggle(200);
	});
})(jQuery);

var nav = jQuery('.sticky_header');
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 20) {
        nav.addClass("sticky").animate({
        	margin: "slow",
        	padding: "slow",
        });
    } else {
        nav.removeClass("sticky").animate({
        	margin: "slow",
        	padding: "slow",
        });
    }
});



// =============New js=============

(function($){

	 jQuery(".filter_tigger1").click(function () {
            jQuery(".popup_1").slideToggle("slow");
            jQuery(this).toggleClass("active");
      });

	 // radieo btn
	 jQuery(".filter_tigger2").click(function () {
            jQuery(".popup_2").slideToggle("slow");
            jQuery(this).toggleClass("active");
      });
	 // radieo btn
	 jQuery(".filter_tigger3").click(function () {
            jQuery(".popup_3").slideToggle("slow");
            jQuery(this).toggleClass("active");
      });


     jQuery(".load_more_btn").click(function () {
            jQuery(".opening_table_col_right").slideToggle("slow");
            jQuery(".load_more_btn_wrap").toggleClass("active");
      });



	// read_more_btn
    $(".click_btn_table").click(function() {
        $(".table_style_show").slideToggle("slow");
        $(this).toggleClass('toggle_active');
    }); 

     $(".search-pop").click(function() {
            $('.search-modal').fadeIn('fast');
            $('#search').focus();
     });
     $(".search-modal_close-button").click(function() {
              $('.search-modal').fadeOut(100);

      });
    

	 jQuery(".check_box_tigger").click(function () {
            jQuery(".search_check_box_wrap").slideToggle("slow");
            jQuery(".search_modal_wrap .b-search-col1").toggleClass("border_bottom_active");
            jQuery(this).toggleClass("active");
      });


     // map tigger btn mobile

     jQuery(".location a").click(function () {
            $(this).parents('.catagory_article_area').addClass('mapview');
            $(this).parents('.catagory_article_area').removeClass('listview');
      });
     jQuery(".list_view_item a").click(function () {
            $(this).parents('.catagory_article_area').addClass('listview');
            $(this).parents('.catagory_article_area').removeClass('mapview');
      });
   
     jQuery(".map_tigger_btn").click(function () {
            jQuery(".category_map_view").toggleClass("active");
            jQuery(this).toggleClass("active");
      });
   


	  $('.location_filter_box .location_filer_item a').click(function () {
        // Check for active
        $('.location_filter_box .location_filer_item').removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });

})(jQuery);



jQuery(document).ready(function(){
    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var mapOffsetTop = jQuery('.category_map_view').offset().top;
        jQuery(window).scroll(function(evt) {
            // var scrollTop = jQuery(this).scrollTop();
            // var headH = jQuery('.header_container').height();
            // var totalOffset = mapOffsetTop - headH;
            // var bottomTarget = jQuery('.about_baach_clubs_area').offset().top;
            // var winH = jQuery(window).height();
            // if( scrollTop > totalOffset && scrollTop < ( bottomTarget - winH ) ) {
            //     if( ! jQuery('.category_map_view').hasClass('active') ) {
            //         jQuery('.category_map_view').addClass('fixed');
            //         jQuery('.scrollobar_content').css('padding-top', jQuery('.category_map_view').height() );
            //     }                
            // } else {
            //     if( ! jQuery('.category_map_view').hasClass('active') ) {
            //         jQuery('.category_map_view').removeClass('fixed');
            //         jQuery('.scrollobar_content').css('padding-top', 0 );
            //     }
            // }


            var scrollTop = jQuery(this).scrollTop();
            var headerH = jQuery('.header_container').height();
            var catagroy_bannerH = jQuery('.catagroy_banner').height();

            var total_HEDH_CBH = headerH + catagroy_bannerH;

            if (scrollTop > (total_HEDH_CBH - 157)) {
                jQuery('.category_map_view').addClass('fixed_to');
                jQuery('.scrollobar_content').css('padding-top', jQuery('.category_map_view').height());
            }else {
                jQuery('.category_map_view').removeClass('fixed_to');
                jQuery('.scrollobar_content').css('padding-top', 0 );
            }


        console.log(
            'mapOffsetTop:' + mapOffsetTop, '\n', 
            'screen_VH:', + screen_VH, '\n', 
            'scrollTop:' + scrollTop, '\n', 
            'headerH:' + headerH, '\n',
            'catagroy_bannerH:' + catagroy_bannerH, '\n',
            'total_HEDH_CBH:' + total_HEDH_CBH, '\n',
            );
        });

    }
});



// menu ovelay 
jQuery(document).ready(function(){
  $(".current_page_item").mouseover(function(){
    $("body").addClass("ovly_bg_menu");
  });
  $(".current_page_item").mouseout(function(){
    $("body").removeClass("ovly_bg_menu");
  });
});