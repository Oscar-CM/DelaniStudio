 $(document).ready(function(){
            $('#partOne').hide();
            $('#partTwo').hide();
            $('partThree').hide();

            $('#design').click(function(){
            	$('#design').hide();
            	$('#partOne').show();
            });
            $('#partOne').click(function(){
            	$('#partOne').hide();
            	$('#design').show();
            });


          });