const express=require('express')
const http=require('http')
const socketio=require('socket.io')
const {
    db
} = require('./db')
const app=express()
const server=http.createServer(app)
const io=socketio(server)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const SERVER_PORT=process.env.PORT || 8888
let idUserMap={}

io.on('connection',(socket)=>{
    console.log('connected'+socket.id)
    socket.on('login',(data)=>{
        idUserMap[data.username]=socket.id
        socket.emit('loggedin')
        console.log(idUserMap)
    })
    socket.on('chat',(data)=>{
        if(data.msg.startsWith('@')){
            let recipient=data.msg.split(':')[0].substr(1)
            let rcptsocket=idUserMap[recipient]
            io.to(rcptsocket).emit('chat_rcvd',{
                username:data.username,
                msg:data.msg
            })
        }else{
            console.log(data);
            socket.broadcast.emit('chat_rcvd',{
            username:data.username,
            msg:data.msg
        })
    }
  
})

})
app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/',express.static(__dirname +'/public'))

db.sync()
.then(()=>{
    server.listen(SERVER_PORT,()=>{
        console.log('server started on http://localhost:8877')
    })
})
.catch(console.error)