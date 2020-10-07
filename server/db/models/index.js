const User = require('./user')
const Exercises = require('./exercises')
const WorkoutLog = require('./workoutLog')

WorkoutLog.belongsTo(User)
User.hasMany(WorkoutLog)

Exercises.belongsTo(WorkoutLog)
WorkoutLog.hasMany(Exercises)

module.exports = {
  User,
  WorkoutLog,
  Exercises,
}
