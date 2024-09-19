const User = require('./User');
const Project = require('./Project');
const Affirmation = require('./Affirmation');
const context = {
  backgroundImage:
    '/Users/stitchdabih/Documents/GitHub/TimeManagment/assets/images/numerology-bg.jpg',
};

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});
User.hasMany(Affirmation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Affirmation.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Affirmation };
