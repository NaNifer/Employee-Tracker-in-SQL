const router = require('express').Router();
const connection = require('../../../config/connection');

router.get('/', async (req,res) => {

    try {
        const getAllEmpl = 'SELECT * FROM employees'
    } catch (error) {
        console.log(error);
        res.json(error);
    }

});



module.exports = router;