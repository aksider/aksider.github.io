(function ($) {
    jQuery.fn.myTabs = function (options) {
        
        var createTabs = function () {
            i = 0;
            
            showPage = function (i) {
                $(".tabs__content").hide('slow');
                $(".tabs__content").eq(i).show(400);
                $(".tabs__item").removeClass("active");
                $(".tabs__item").eq(i).addClass("active");
            };
            
            showPage(0);
            
            $(".tabs__item").each(function (index, element) {
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(".tabs__item").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);

$(document).ready(function () {
    $(".tabs").myTabs();
});