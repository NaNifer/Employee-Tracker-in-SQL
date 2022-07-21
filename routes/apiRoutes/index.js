const router = require('express').Router();
const employeesRoutes = require('./employeesRoutes')


router.use('/employees', employeesRoutes);

module.exports = router;