const socket=io()
socket.on('connect',()=>{
    console.log('Connected '+ socket.id)
})

$(()=>{
    $('#chatbox').hide()
    let username = ''
    $('#login').click(function(){
        $.get('/login',(data)=>{
            if(data.username==$('#username')){        
                socket.emit('login', {
                username : $('#username').val(),
            })
        }else{
            window.alert('pls sign up firstly')
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