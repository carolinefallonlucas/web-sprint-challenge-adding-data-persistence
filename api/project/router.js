// build your `/api/projects` router here


const express = require("express"); 
const router = express.Router(); 
const Projects = require('./model');

router.get("/", async (req, res) => {
    try
    {
        const getProjects = await Projects.getAll();
        res.status(200).json(getProjects);
    } catch (error)
    {
        console.log(error, "error");
        res.status(500).json({ errorMessage: error.message })
    }
    
    
}); 

module.exports = router; 