const Project = require('./projects')
const Team = require('./teams')
const Startup = require('./startup')
const User = require('./user')

User.belongsTo(Team, {
    foreignKey:'team_id',
    onDelete: 'CASCADE'
})

Team.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})
Team.hasOne(Project,{
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
})

Project.hasOne(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})

Startup.hasOne(Project, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
})

Project.belongsTo(Startup, {
    foreignKey: 'startup_id',
    onDelete: 'CASCADE'
})

module.exports = {Project, User, Startup, Team}
