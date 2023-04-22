const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json')

router.get('/videos', (req, res) => {
    res.json(videos);
});

module.exports = router;