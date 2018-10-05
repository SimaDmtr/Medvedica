$(function(){
    $('.menu a').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});
$(document).ready(function () {
    $('#phone_field').mask("+375(99)999-99-99", {autoclear : false});
});
