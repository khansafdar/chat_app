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
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
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
    }
})  
exports=module.exports={
    db,Users
}