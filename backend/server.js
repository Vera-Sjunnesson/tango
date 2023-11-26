import express from "express";
import cors from "cors";
import norteEvents from './data/tn-event.json';

// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
const listEndPoints = require('express-list-endpoints')

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  const welcomeText = "Tango Norte events and venues";
  const deployedAPI = "https://tn-norte.onrender.com";
  const endpoints = (listEndPoints(app))

  res.send({
    success: true,
    message: "OK",
    body: {
      welcomeText,
      deployedAPI,
      endpoints
    }
  });
});

app.get("/eventlist", (req, res) => {
  const { featured } = req.query;
  let featuredNorteEvents = norteEvents;
  if (featured) {
    featuredNorteEvents = norteEvents.filter((event) => {
      return event.featured === true;
    });
  } 
  if (norteEvents) {
    res.status(200).json({
      success: true,
      massage: "OK",
      body: {
        norteEvents: featuredNorteEvents
      }
    });
  } else {
    res.status(500).json({
      success: false,
      massage: "Something went wrong",
      body: {}
    });
  }
});

app.get("/eventlist/:id", (req, res) => {
  const { id } = req.params
  const singleEvent = norteEvents.find((event) => {
    return event.id === +id
  })
  if (singleEvent) {
    res.status(200).json({
      success: true,
      message: "OK",
      body: {
        norteEvents: singleEvent
      }
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Single event not found",
      body: {}
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});