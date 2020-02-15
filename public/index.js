$(()=>{
    $('#submit').click((req,res)=>{
        $.post(
            '/signup',{
                firstname:$('#firstname').val(),
                lastname:$('#lastname').val(),
                username:$('#username').val(),
                password:$('#password').val(),
                email:$('#email').val(),
            },(data)=>{
                if(data.error)alert(data.error)
                else{
                    alert(`logged in as ${data.username}`)
                    return window.location.replace("/api");
                }
            }
        )
    })
})