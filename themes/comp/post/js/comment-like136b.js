$(document).ready(function(){
    /* The following code is executed once the DOM is loaded */
    
    
 $("body").on("click", "a.like_comment", function(e) {
e.preventDefault();    
    
var iditem=$(this).attr('id');

$.post('like-comment.php',{"id":$(this).attr('id')},function(msg){
    		
 if(msg.status) $('div.comment_item span.result_comment_likes#'+msg.id).html(msg.num);
  									
		},'json');
	
});   
    

});