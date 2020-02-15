const socket=io()
socket.on('connect',()=>{
    console.log('Connected '+ socket.id)
})

$(()=>{
    $('#chatbox').hide()
    let username = ''
    $('#login').click(function(){
        $.post('/login',{
            username: $('#username').val(),
            password:$('#password').val()
        },(data)=>{
            if(data.username!=$('#username').val() || data.password!=$('#password').val()){
                window.alert('please signup firstly')
                return window.location.replace("../");
            }

            else{
                socket.emit('login', {
                    username : $('#username').val(),
                })
            }
        })
    })

    socket.on('loggedin',()=>{
        console.log('login succcessful')
        username=$('#username').val()
        $('#loginform').hide()
        $('#chatbox').show()
    })
    $('#send').click(()=>{
        console.log('Sending chat')
        socket.emit('chat',{
            msg:$('#msg').val(),
            username:username
        })
    })
    socket.on('chat_rcvd',(data)=>{
        $('#chats').append(
            $('<li>').text(`
            ${data.username}:${data.msg}`
            )
        )
    })
})