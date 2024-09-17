const User = require('./User');
const Project = require('./Project');
const Affirmation = require('./Affirmation');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Affirmation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Affirmation.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Affirmation  };
