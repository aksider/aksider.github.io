function GoogleCallBack(data) {

    var $body = $('body');
    var $content;
    
    console.log('data', data);
    
    for(var i = 0; i < data.items.length; i++) {
        
//        console.log('data', data.results[i]);
//        console.log('data', data.results[i].url);
//        console.log('data', data.results[i].titleNoFormatting);
        
        $content = $('<div class="mySearchResult"><a href="' + data.items[i].link + '" class=""><h4 class="">' +  data.items[i].htmlTitle + '</h4></a>').append('<h5 class="myLink">' +  data.items[i].link + '</h5>').append('<p class="">' +  data.items[i].htmlSnippet + '</p>');
        
        $body.append($content);
    }
    
    
}


function searchGoogle() {
   $.ajax({
//        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&q=' + 'test' + '&callback=GoogleCallBack&context=?',

//last worked       //        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&q=' + $('#searchText').val() + '&callback=GoogleCallBack&context=?',
//        url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDgNjaKajvyzbI6uZlqOsa_HY6Th3w5Gfk&q=' + $('#searchText').val() + '&callback=GoogleCallBack&context=?',
        url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDgNjaKajvyzbI6uZlqOsa_HY6Th3w5Gfk&cx=011168767613474021112:o098zgkqbg4&q=' + $('#searchText').val() + '&callback=GoogleCallBack&context=?',
//        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + 'test' + '&callback=GoogleCallBack&context=?',
        data: {
            abc: 123
        },
        method: 'POST',
        dataType: 'jsonp',
        success: function () {
            
        },
        error: function () {
            
        }
    }); 
}



$(function () {
    
    $('#myButton').click(function (e) {
        e.preventDefault();
        $('#searchForm').addClass('myRowTop');
        $('#logoG').addClass('logoGoogleTop');
        $('.mySearchResult').remove();
        searchGoogle();
    });
    
});