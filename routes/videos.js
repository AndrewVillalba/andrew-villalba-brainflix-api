const express = require('express');
const router = express.Router();
// let videos = require('../data/videos.json');
const fs = require ('fs');
const {v4: uuidv4} = require ('uuid');


function videoList() {
    const videoInfoList = fs.readFileSync('./data/videos.json');
    const parsedData = JSON.parse(videoInfoList);
    return parsedData;
}

router.get('/videos', (req, res) => {
    videos = videoList();
    res.json(videos);
});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    let videos = videoList();
    const video = videos.find((i) => i.id === videoId);

    if(video) {
        res.json(video);
    } else {
        res.status(404).send('Video was not found');
    }
})

module.exports = router;