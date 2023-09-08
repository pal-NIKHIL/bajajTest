const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  const response = {
    is_success: true,
    user_id: "nikhil_pal_17052003",
    email: "po7508@srmist.edu.in",
    roll_number: "RA2011033010178",
    numbers: data.filter((item) => typeof item === "number"),
    alphabets: data.filter(
      (item) => typeof item === "string" && item.length === 1
    ),
    highest_alphabet: alphabets.length > 0 ? alphabets.sort().pop() : null,
  };

  res.json(response);
});
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
