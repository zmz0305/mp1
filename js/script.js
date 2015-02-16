$(
    $(window).scroll(function(event){
        var section1 = $('#section1');
        var section2 = $('#section2');
        var section3 = $('#section3');
        var entry1 = $('#entry1');
        var entry2 = $('#entry2');
        var entry3 = $('#entry3');
        var entry4 = $('#entry4');

        //if($(document).scrollTop() >  section1.offsetTop){
        if($(document).scrollTop() > 100 && $(document).scrollTop() < section2.offset().top){
            entry1.css('background-color', 'brown');
        }
        else {
            entry1.css('background-color', 'lightgray');
        }
        if($(document).scrollTop() > section2.offset().top && $(document).scrollTop() < $('#video-section').offset().top){
            entry2.css('background-color', 'brown');
        }
        else {
            entry2.css('background-color', 'lightgray');
        }
        if($(document).scrollTop() > $('#video-section').offset().top && $(document).scrollTop() < section3.offset().top){
            entry3.css('background-color', 'brown');
        }
        else {
            entry3.css('background-color', 'lightgray');
        }
        if($(document).scrollTop() > section3.offset().top){
            entry4.css('background-color', 'brown');
        }
        else {
            entry4.css('background-color', 'lightgray');
        }

    }),
    $(window).scroll(function(e){
       if($(document).scrollTop() > 0){
           $("header").removeClass('large').addClass('small');
       }
       else {
           $('header').removeClass('small').addClass('large');
       }
    }),
    function(){
        // Set the interval to be 5 seconds
        console.log("adsfadf");
        var t = setInterval(function(){
            $("#carousel ul").animate({marginLeft:-480},1000,function(){
                $(this).find("li:last").after($(this).find("li:first"));
                $(this).css({marginLeft:0});
            })
        },5000);
    }




);



$(function() {
    //rotation speed and timer
    var speed = 5000;
    var run = setInterval('rotate()', speed);

    //grab the width and calculate left value
    var item_width = $('#slides li').width();
    var left_value = item_width * (1);

    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));

    //set the default item to the correct position
    $('#slides ul').css({'left' : left_value});
    //if user clicked on prev button
    $('#prev').click(function() {
        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200,function(){
            //move the last item and put it as first item
            $('#slides li:first').before($('#slides li:last'));
            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });
        //cancel the link behavior
        return false;

    });
    //if user clicked on next button
    $('#next').click(function() {

        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            //move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));

            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });

        //cancel the link behavior
        return false;

    });

    $('#slides').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);
        }
    );

});
function overlay() {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}




