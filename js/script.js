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

    var myNumber = 1;

    $('#addOne').click(
      function() {
        myNumber = myNumber + 1;    
        $('#myNumber').text(myNumber);
      }
    )

    $('#subtractOne').click(

      function() {
        myNumber = myNumber - 1;    
        $('#myNumber').text(myNumber);
      }
    )

  <button type="button" onclick="showDiv(currentImage - 1)">Previous</button>
  <button type="button" onclick="showDiv(currentImage + 1)">Next</button>
	
$('.chartme-btn-main').click(function(){
    $(this).toggleClass('active');
});