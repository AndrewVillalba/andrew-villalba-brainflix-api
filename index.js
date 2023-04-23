const express = require('express');
const app = express();
const PORT = 8080;
const videoRoutes = require('./routes/videos')
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/videos', express.static("./public/images"));

app.use('/videos', videoRoutes);
app.use('/videos/:id', videoRoutes);

app.get('/', (req, res) => {
    res.send("home")
});

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
});