//Skill Block

$( document ).ready(function() {
    $(".grid-skills-1").next().hide().next().hide();
    $( ".grid-skills-1").click(function( event ) {
        $(event.currentTarget).next().slideToggle(500).next().slideToggle(500);
        $(event.currentTarget).parent().siblings().children().next().hide(500);
    });            

});
