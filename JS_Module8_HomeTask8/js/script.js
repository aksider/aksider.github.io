$(function () {
    
    var $buttonHelp = $('.myForm__button');
    var $myTitle = $('.myForm__inputTitle');
    var $myInput = $('.myForm__item');
    
    $buttonHelp.on('click', function (e) {
        $myTitle.show(400);
        e.preventDefault();
    });
    
    $myInput.mouseleave(function (e) {
        $(this).children('.myForm__inputTitle').hide('slow');
    });
    
    $myInput.mouseenter(function (e) {
        $(this).children('.myForm__inputTitle').show(400);
    });

});