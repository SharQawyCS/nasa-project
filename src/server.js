const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Endpoint to add a user
app.post("/api/users", (req, res) => {
  const newUser = req.body;

  // Read existing users from the JSON file
  fs.readFile("data/users.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading users data" });
    }
    const users = JSON.parse(data);

    users.push(newUser);



  });
});

const homepage = fs.readFileSync('/src/pages/HomePage/HomePage.html', '');

app.get('/', (req, res) => {
  res.send(homepage);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});