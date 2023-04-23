const express = require('express');
const router = express.Router();
const fs = require ('fs');
const {v4: uuidv4} = require ('uuid');

function videoList() {
    const videoInfoList = fs.readFileSync('./data/videos.json');
    const parsedData = JSON.parse(videoInfoList);
    return parsedData;
}

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
    const postedVideo = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        image: 'Upload-video-preview.jpg',
        comments: [
            {
              "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
              "name": "G Rodriguez",
              "comment": "Wow Andrew, this bike is super lame, I prefer RED BIKES.",
              "likes": 0,
              "timestamp": 1628522461000
            },
            {
              "id": "091de676-61af-4ee6-90de-3a7a53af7521",
              "name": "Mandy Fernandez",
              "comment": "Dude I love your Blue Bike! Forget what G said! This is dope!",
              "likes": 0,
              "timestamp": 1626359541000
            },
            {
              "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
              "name": "Jorge Sader",
              "comment": "Cool Bike, but you are still really bad at coding, maybe you should spend less time biking, and a little more time typing!",
              "likes": 0,
              "timestamp": 1626011132000
            }
          ],
        channel: 'Andrew Villalba',
        likes: '1,000,000',
        views: '1,200,243,289',
        timestamp: 1632496261000,
    };

    let videos = videoList();
    videos.push(postedVideo);
    fs.writeFileSync('./data/videos.json',JSON.stringify(videos));

    res.status(201).json(newVideos);
})

module.exports = router;