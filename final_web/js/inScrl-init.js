//Skill Block



$( document ).ready(function() {
    $(".skill-list-header").next().hide().next().hide();
    $(".skill-list-header").parent().prev().children().next().hide();
    $( ".skill-list-header").click(function( event ) {
        $(event.currentTarget).next().slideToggle(500).next().slideToggle(500);
        
        $(event.currentTarget).parent().siblings(["section"]).children().next().slideUp(500);
        
        $(event.currentTarget).parent().prev().children().children().animate({
            width: $(event.currentTarget).parent().prev().children().children().attr('id')
        }, 1500);
    });
});
