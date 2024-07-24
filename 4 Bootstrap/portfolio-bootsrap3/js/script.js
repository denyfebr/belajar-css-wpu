$('.page-scroll').on('click', function(e) {
    e.preventDefault();

    // Get the target href
    var target = $(this).attr('href');

    // Animate scrolling to the target element
    $('html, body').animate({
        scrollTop: $(target).offset().top - 50
    }, 1250, 'swing'); // Adjust the duration as needed
});

// parallax
//about
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll/6 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll/4 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll/2 +'%)'
    });

    //portfolio
    if(wScroll > $('.portfolio').offset().top-250){
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * (i+1))
        });
        
    }


});