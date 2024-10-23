// import express
import express from "express";

// initialize express
const app = express();

// server port
const port = 3000;

// route
app.get("/", (req, res) => {
  res.send("Welcome to 3mtt cohort 2")
})

app.get("/contact", (req, res) => {
  res.send("<h3>Contact us page</h3>")
})

// starting expressjs

app.listen(port, () => console.log(`Its all start from the http://localhost:${port}`));


