$('.scroll').on('click', function (e) {
    var target = $(this).attr('href');
    var targetElement = $(target);
    var scrollDistance = targetElement.offset().top;
    $('body').animate({
        scrollTop: scrollDistance - 50
    }, 500, 'swing');
    e.preventDefault();
});