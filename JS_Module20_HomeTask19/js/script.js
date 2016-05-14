// <!--  jcarousel -->
$(document).ready(function(){
$('.jcarousel')
  .jcarousel({
    animation: 'slow',
    wrap: 'circular'
  })

  .jcarouselAutoscroll({
    interval: 5000,
    target: '+=1',
    autostart: true
  });

  $('.jcarousel_pagination')
  .jcarouselPagination({
    item: function(page) {
      return '<a class = "jcarousel_page" href="#' + page + '"></a>';
    }
  })

  .on('jcarouselpagination:active', 'a', function() {
    $(this).addClass('active');
  })

  .on('jcarouselpagination:inactive', 'a', function() {
    $(this).removeClass('active');
  });

  $('.jcarousel').jcarousel({ 
  });  
  $('.jcarousel').jcarousel({
    animation: {
      duration: 600,
      easing:   'linear',
      complete: function() {
      }
    }
  });

// 
    function open_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
     function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {       
        var currentAttrValue = $(this).attr('href');
        console.log(currentAttrValue);
 
        if ($(e.target).is('.active')) {
             close_accordion_section();
            console.log(e.target);
        } else {
            open_accordion_section();
            console.log(e.target); 
          
            $(this).addClass('active');           
            $('.accordion ' + currentAttrValue).slideDown(500).addClass('open'); 
        } 
        e.preventDefault();

    });
});