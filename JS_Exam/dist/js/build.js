/*exam - v1.0.0 - 2016-03-20 */
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
$(document).ready( function() {

   // SLIDER
  $('.flexslider').flexslider({
     animation: "slide"
   });
  // Renderingimage for Isotop
  //  function imgRender(img) {
   //
  //  			$.ajax({
  //         type: "GET",
	// 			  dataType: "json",
	// 			  cache: false,
  //  				url: 'http://api.pixplorer.co.uk/image?word=' + img + '&amount=7&size=m',
  //  				success: function(data) {
  //  					console.log(data);
  //  					var html = tmpl($('#grid-template').html(), data);
  //           $('.grid').remove();
   //
  //  					$('.ideas').append(html);
  //           // ISOTOP
  //         $(window).resize(function() {
  //          if ($(window).width() > 960) {
  //            $('.grid').isotope({
  //              itemSelector: '.grid-item',
  //              masonry: {
  //                columnWidth: 20,
  //                gutter: 15
  //              }
  //            });
  //          }
  //         else {
  //           $('.grid').isotope({
  //             itemSelector: '.grid-item',
  //             masonry: {
  //               columnWidth: 240,
  //               gutter: 20
  //             }
  //           });
  //         }
  //        });
   //
  //  			}
  //  			});
  //  		}

      var xmlhttp = getXmlHttp();
         if(window.XDomainRequest)
             xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
         else
             xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
         xmlhttp.send(null);
         var obj = eval('('+xmlhttp.responseText+')')
         if(xmlhttp.status == 200) {
           console.log(data);
           var html = tmpl($('#grid-template').html(), data);
           $('.grid').remove();

           $('.ideas').append(html);
           // ISOTOP
         $(window).resize(function() {
          if ($(window).width() > 960) {
            $('.grid').isotope({
              itemSelector: '.grid-item',
              masonry: {
                columnWidth: 20,
                gutter: 15
              }
            });
          }
         else {
           $('.grid').isotope({
             itemSelector: '.grid-item',
             masonry: {
               columnWidth: 240,
               gutter: 20
             }
           });
         }
        });
         }


         //hide butoon of navigations
             $('.owl-prev').html(' ');
             $('.owl-next').html(' ');
     });


      // SEARCH
      $('.search').on('submit', submit);

       function submit(e){
         var val = encodeURIComponent($('.interests').val());
		   	imgRender(val);
         e.preventDefault();
       }

});
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
