$(document).ready(function() {
    $('#hamb').click(function(){
        $('.meni').toggleClass('klik');
    });
    $('.meni').click(function(){
        $('.meni').removeClass('klik');
    });
});