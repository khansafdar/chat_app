const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/test.db'
  })

const Users = db.define('user', {
    firstname:{
      type:Sequelize.STRING,
    },
    lastname:{
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
})    
exports=module.exports={
    db,Users
}