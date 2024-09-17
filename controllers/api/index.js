const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const affirmationRoutes = require('./affirmationRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/affirmations', affirmationRoutes);

module.exports = router;
