   <script type="text/javascript">
    	$(document).ready(function(){
    $('#my-scroll-area').height($(window).height()-327);
});
    </script>
    <script type="text/javascript">
    	$(document).ready(function(){
    $('#right-container').height($(window).height()-99);
});
    </script>
   	<script>
   		$('.owl-carousel').owlCarousel({
		    stagePadding: 1,
		    loop:false,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		})
   	</script>
	<script type="text/javascript">
		  $(document).ready(function(){ $('#left-tab-container').easytabs({updateHash:false}); });
		 
    </script>
 
        <script type="text/javascript">
       $(document).ready(function(){ $('#tab-container').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-1').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-2').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-3').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-4').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-5').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-6').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-7').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-8').easytabs({updateHash:false}); });
       $(document).ready(function(){ $('#tab-container-9').easytabs({updateHash:false}); });
        $(document).ready(function(){ $('#tab-container-20').easytabs({updateHash:false}); });
    </script>
    
    
    <script>
    	 $(function () {
     var icons = {
         header: "iconOpen",    // custom icon class
         activeHeader: "iconClosed" // custom icon class
     };
     $("#accordion").accordion({ autoHeight: true});
     $("#accordion").accordion({ collapsible: true });
     $("#accordion").accordion({ icons: icons });
     $("#accordion").accordion({
    multiple: true
});
	})
    </script>
    <script>
    	$(document).ready(function() {
    var 
        niceScroll = $('.my-scroll-area').niceScroll();

    // trigger the scrollend event right away to set the inital state
    niceScroll.triggerScrollEnd(); 
    arrowUp.on('click', function() {
        niceScroll.doScrollBy(200);
        return false;
    }); 
    arrowDown.on('click', function() {
        niceScroll.doScrollBy(-200);
        return false;
    });
});
    </script>