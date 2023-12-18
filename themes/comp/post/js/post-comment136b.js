$(document).ready(function(){
    /* The following code is executed once the DOM is loaded */
    
    /* This flag will prevent multiple comment submits: */
    var working = false;
    
    /* Listening for the submit event of the form: */
    $('#addCommentForm').submit(function(e){
        e.preventDefault();
        if(working) return false;
        
        var default_submit_val=$('#submit').val();
        
        working = true;
        $('#submit').val('Waiting');
        $('span.error').remove();
        
        $.post('post-comment.php',$(this).serialize(),function(msg){

    		working = false;
            $('#submit').val(default_submit_val);
			
			if(msg.status){

				$(msg.html).hide().insertBefore('#zerostart').slideDown();
				$('#body').val('');
				
				$('#comment_show_err').prepend('<span id="err_msg2" class="error-sent">'+msg.errors+'</span>');		
				$('span.error-sent').fadeOut(20000);
			}
			else {
				
				$.each(msg.errors,function(k,v){
					$('#comment_show_err').prepend('<span id="err_msg1" class="error">'+v+'</span>');				
					$('span.error').fadeOut(20000);
					
				});
			}
		},'json');

	});
	
	  

$("body").on("click", "a.reply", function(e) {
e.preventDefault();
  
 var commentid=$(this).attr('id');      	
$('div.reply_box').css('display','none');	
$('div#reply'+commentid).css('display','block');
	
});	
	
	
	
	$('.addreply').submit(function(e){

 		e.preventDefault();
		if(working) return false;
        
        var default_submit_val=$('#submit_reply').val();
		
		working = true;
        $('#submit_reply').val('Waiting');
		$('span.error').remove();		
		
		$.post('comment-reply.php',$(this).serialize(),function(msg){

			working = false;
            $('#submit_reply').val(default_submit_val);
			
			if(msg.status){

			    $(msg.html).hide().insertBefore('#zerostart_reply'+msg.commentid).slideDown();
				
				$('#body_reply'+msg.commentid).val('');
				
				$('#reply'+msg.commentid).prepend('<span id="err_msg2" class="error-sent-reply">'+msg.errors+'</span>');
				
				$('span.error-sent-reply').fadeOut(20000);			
				
			}
			
		},'json');

	});	
	
	
	
	
});