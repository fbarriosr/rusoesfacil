$(document).foundation()

var imgObit = $('#rata');

var flag = 1;


$(document).ready(function (){
        /*if (imgObit != null){
            //imgObit.addClass('orbit-image') ; 
             imgObit.css('height', 'auto') ; 
        }*/

    // codigo para arreglar bugs del menu y del orbit slider
    
    $('body').bind('touchmove', function(e) { 
        console.log($(this).scrollTop()); // Replace this with your code.

        if ($('#example-menu').is(":visible") )
        {
          $('#example-menu').hide();
        }

    });

    $('.clickMenu').click(function(){ 
        if ($('#example-menu').is(":visible") )
        {
          $('#example-menu').hide();
          if (flag)
            {
              $('.orbit').css("z-index", "-1");
              flag = 0;
            }else {
              $('.orbit').css("z-index", "0"); 
               flag = -1;
            }
        }
    });
     $('#clickBtnMenu').click(function(){ 
        if (flag)
        {
          $('.orbit').css("z-index", "-1");
          flag = 0;
        }else {
          $('.orbit').css("z-index", "0"); 
           flag = -1;
        }
    });

    


    

    
    

});


$(function() {
   $(window).on('resize', function(e) {
        /*var x = $(this).width(),    
            y = $(this).height(),   
            z = x/y,    
            
            output = $('#myOutput').length ? $('#myOutput').empty() : $('<div />', { id: 'myOutput', style: 'background: #ffa; padding: 10px; position: fixed; right: 30px; top: 30px; z-index: 999;' }).appendTo('body'),
            
            pX = $('<p />', { text: 'x: '+x }).appendTo(output),
            pY = $('<p />', { text: 'y: '+y }).appendTo(output);
        */
            if (imgObit != null){

			    imgObit.css('height', 'auto') ; 
                imgObit.css('max-height', 'auto') ; 
			}

    });
})
