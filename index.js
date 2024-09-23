import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        res.render("index.ejs", {
        joke: response.data.joke,
    })
    } catch (error) {
        console.error(error.response.data);
        res.status(500)
    }
})


app.listen(port, ()=>{
    console.log(`Server started on port ${port}.`);
})