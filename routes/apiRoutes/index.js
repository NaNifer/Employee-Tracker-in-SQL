const router = require('express').Router();
const todosRoutes = require('./employeeRoutes')


router.use('/todos', employeeRoutes);

module.exports = router;