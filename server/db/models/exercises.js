const Sequelize = require('sequelize')
const db = require('../db')

const Exercises = db.define('exercises', {
  bodyPart: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  set: {
    type: Sequelize.INTEGER,
  },
  weight: {
    type: Sequelize.INTEGER,
  },
  rep: {
    type: Sequelize.INTEGER,
  },
  updatedDate: {
    type: Sequelize.DATEONLY,
  },
  deletedDate: {
    type: Sequelize.DATEONLY,
  },
  createdDate: {
    type: Sequelize.DATEONLY,
  },
})

module.exports = Exercises
