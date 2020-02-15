const route = require('express').Router()
const { Users } = require('../db')

route.post('/', async (req, res) => 
{
  const user = await Users.findOne({
    where: {
      username:req.body.username,
      password:req.body.password
    },
  }).then((user) => {
    res.send(user)
  }).catch((err) => {
    throw err
  })
})
  
exports=module.exports ={
route
}