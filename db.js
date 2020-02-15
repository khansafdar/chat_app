const Sequelize = require('sequelize')

const db = new Sequelize('safdar', 'root','66666688', {
    host: 'localhost',
    dialect:'mysql',
    pool:{
      min:0,
      max:10
    }
  })

const Users = db.define('user', {
    firstName:{
      type:Sequelize.STRING,
    },
    lastName:{
      type:Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING(30),
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    email:{
      type:Sequelize.STRING(40)
    },
    fbToken: {
      type: Sequelize.TEXT
    },
    fbId: {
      type: Sequelize.STRING(30),
      unique: true
    }
})  
exports=module.exports={
    db,Users
}