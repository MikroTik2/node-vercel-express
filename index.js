// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get("/home", (req, res) =>{
     res.json({
          message: "LOL",
          description: "Kek",
     });
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));