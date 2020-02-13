const route = require('express').Router()
const {Users}=require('../db')

route.get('/',async(req,res)=>{
  const user=await users.findone({
    where:{
      username:req.body.username,
      password:req.body.password
    }
  })
  if(!user){
    return res.send({error:'NO such user found pls signup first'})
  }
  res.send(user)
})
route.post('/',async(req, res) => {
  console.log(req.body)
  try {
    let user = await Users.findOne({
      where: {
        username: req.body.username,
        password:req.body.password
      },
    })

    if (!user) {
      user = await Users.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username: req.body.username,
        password:req.body.password,
        email:req.body.email
      })
    }

    res.send(user)
  } catch (err) {
    console.log(err)
    res.send({ err })
  }
})


module.exports =route