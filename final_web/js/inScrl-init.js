$( document ).ready(function() {
    $(".skill-list-block").hide();
    $( ".grid-1-skills").click(function( event ) {
    
        $(".skill-list-block").slideToggle(500);
    });            
 
});