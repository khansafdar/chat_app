const { Users } = require('../db')
const route = require('express').Router()

route.get('/', (req, res) => {
  window.location.replace("/login")
})

route.post('/', (req, res) => {
  Users.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  }).then((user) => {
    res.send(user)
  }).catch((err) => {
    throw err
  })
})


module.exports = {
  route
}
