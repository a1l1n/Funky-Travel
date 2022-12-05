
const { Router } = require('express');
const { newActivity, getActivities } = require('../controllers/activityControllers');
const router = Router();

router.post('/', newActivity);      //POST -> localhost:3001/activities
router.get('/', getActivities);     //GET  -> localhost:3001/activities

module.exports = router; 
 
