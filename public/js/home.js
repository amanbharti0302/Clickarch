$(document).ready(function(){
 
    $("#home-form").submit(function(e){
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        $.post('/getintouch',{name,email,message},(data)=>{
            alert(data.message);
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
        })
        e.preventDefault();
   })


})