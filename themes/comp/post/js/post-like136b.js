$(document).ready(function(){
    /* The following code is executed once the DOM is loaded */
 
$('a#add_like').click(function(e){
e.preventDefault();
          
$.post('like-post.php',{"id":$('a#add_like').attr('class')},function(msg) {
        	
  if(msg.status) $('#like_box #result_subject_likes').html(msg.num);
  else {
	  $('a#add_like').attr('id','locked');
  }					
		},'json');

	});
    
		
$('a#locked').click(function(e){
 		e.preventDefault();
	});	
		
});