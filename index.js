const express = require('express');
const app = express();
const PORT = 8080;
const videoRoutes = require('./routes/videos')

app.use(express.json());
app.use('/', videoRoutes)

app.get('/', (req, res) => {
    res.send("home")
})


app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
});