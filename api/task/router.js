// build your `/api/tasks` router here
const Tasks = require('./model'); 
const express = require('express'); 
const router = express.Router();

router.get('/api/tasks', async (req, res) => {  try
    {const getTasks = await Tasks.getAll();
        res.status(200).json(getTasks);
    } catch (error)
    {
        console.log(error); 
        res.status(500).json({ errorMessage: error.message })
    }
});



module.exports = router; 