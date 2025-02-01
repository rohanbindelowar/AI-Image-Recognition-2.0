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

app.post("/upload", async (req, res) => {
  const formData = new FormData();
  form.append("image", req.body.file);

  (async () => {
    try {
      const response = await got.post("https://api.imagga.com/v2/tags", {
        body: formData,
        username: apiKey,
        password: apiSecret,
      });
      console.log(response.body);
    } catch (error) {
      console.log(error.response.body);
    }
  })();
});
