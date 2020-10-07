const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutLog = db.define('workoutLog', {
  updatedDate: {
    type: Sequelize.DATEONLY,
  },
  deletedDate: {
    type: Sequelize.DATEONLY,
  },
  createdDate: {
    type: Sequelize.DATEONLY,
  },
  expertiseLevel: {
    type: Sequelize.ENUM('beginner', 'intermediate', 'expert'),
  },
})

module.exports = WorkoutLog
