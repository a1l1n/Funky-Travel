const { Router } = require('express');
const { getAllCountries, getCid } = require('../controllers/countryControllers')
const router = Router();

router.get('/', getAllCountries); // localhost:3001/countries
router.get('/:idC', getCid);      // localhost:3001/countries/:idC

module.exports = router;


