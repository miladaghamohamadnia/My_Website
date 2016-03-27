    $('#alert').click( function(){
     alert('You clicked me!');
    });

    $('#makeGreen').click(function(){
      $('#myFirstDiv').css('background-color','green')
      
     // $('#myNumber').text('5');
    });

    $('#makeBlue').click(function(){
      $('#myFirstDiv').css('background-color','blue');
    });

    $('#makeRed').click(function(){
      $('#myFirstDiv').css('background-color','red')
    });


$('.chartme-btn-main').click(function(){
    $(this).toggleClass('active');
});


