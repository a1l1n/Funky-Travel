
const { Router } = require('express');
const { newActivity, getActivities, deleteActivity, editActivity } = require('../controllers/activityControllers');
const router = Router();

router.post('/', newActivity);          //POST -> localhost:3001/activities
router.get('/', getActivities);         //GET  -> localhost:3001/activities
router.delete('/', deleteActivity);     // DELETE -> localhost:3001/activities?id=:id
router.put('/', editActivity);          // PUT -> localhost:3001/activities?id=:id

module.exports = router; 
 
