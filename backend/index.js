const express = require("express");
const cors = require("cors");
const got = require("fix-esm").require("got");
const FormData = require("form-data");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

app.listen(port, (error) => {
  if (error) {
    console.log("Error running express server");
  }
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/upload", async (req, res) => {
  const formData = new FormData();
  formData.append("image_base64", req.body.image_base64);

  (async () => {
    try {
      const response = await got.post("https://api.imagga.com/v2/tags", {
        body: formData,
        username: api_key,
        password: api_secret,
      });
    } catch (error) {
      console.log(error);
    }
  })();
});
