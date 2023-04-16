const router = require('express').Router();
const userRoutes = require('./user-routes');
const yardRoutes = require('./yard-routes');
// prefix codes for routes
router.use('/users', userRoutes);
router.use('/yards', yardRoutes);


module.exports = router;