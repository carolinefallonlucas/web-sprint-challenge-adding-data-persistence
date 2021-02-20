// build your `Resource` model here
const express = require('express'); 

const Resource = require('./model'); 

const router = express.Router(); 

router.get('/', async (_, res) => {
    try
    {
        const resources = await Resource.getAll();
        res.status(200).json(resources);

    }
    catch (err)
    {
        res.status(500).json({ Message: '500 error' });
    }
});
    router.post('/', async (req, res) => {
        try
        {
            await Resource.add(req.body);
            res.status(201).json(req.body);
        }catch (err) {
            res.status(500).json({ Message: '500 error' });
    }
});
module.exports = router