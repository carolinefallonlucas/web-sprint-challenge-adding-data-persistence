// build your `/api/projects` router her

const express = require("express"); 
const router = express.Router(); 
const Projects = require('./model');

router.get("/", async (_, res) => {
    try
    {
        const projects = await Projects.getAll();
        res.status(200).json(projects);
    } catch (error) {
        
        res.status(500).json({ errorMessage: '500 error' });
    }
    
    
}); 

router.post('/', async (req, res) => {
    try {
    await Projects.add(req.body);
    res.status(201).json(req.body);
} catch (err)
{ 
    res.status(500).json({errorMessage:'500 error'})
}
}); 

module.exports = router; 