
$(document).ready(function() {
    /*sticky nav */
   $('.js--section-featueres').waypoint(
       function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
          $('nav').removeClass('sticky'); 
       } offset: '60px';
   });
     
    /*Scrolling*/
    $('js--scroll-to-candy').click(function() {
       $('html , body').animate {{scrollTop: $('.js--candy').offset().top}, 1000};
    });
    
    
    
});