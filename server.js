const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const apiKey = "69b503a2ab7023dc6ed625db2b203aa7";

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api", (req, res) => {
  res.render("api");
});

app.get("/map", (req, res) => {
  res.render("map");
});

app.get("/npm", (req, res) => {
  res.render("npm");
});

app.get("/contributors", (req, res) => {
  res.render("contributors");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.post("/weather", (req, res) => {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  request(url, function(err, response, body) {
    if (err) {
      res.render("weather", {
        weather: null,
        error: "Error, please try again"
      });
    } else {
      let weather = JSON.parse(body);

      if (weather.main === undefined) {
        res.render("weather", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
        let weatherText = weather.main.temp;
        let city = weather.name;
        let description = weather.weather[0].description;

        res.render("weather", {
          weather: { weatherText, city, description },
          error: null
        });
      }
    }
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
