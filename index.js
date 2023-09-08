const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.post("/bfhl", (req, res) => {
  console.log(req.body);
  const data = req.body.data;
  if (Array.isArray(data)) {
    const response = {
      is_success: true,
      user_id: "nikhil_pal_17052003",
      email: "po7508@srmist.edu.in",
      roll_number: "RA2011033010178",
      numbers: data.filter((item) => typeof item === "number"),
      alphabets: data.filter(
        (item) => typeof item === "string" && item.length === 1
      ),
      highest_alphabet:
        data.filter((item) => typeof item === "string" && item.length === 1)
          .length > 0
          ? data
              .filter((item) => typeof item === "string" && item.length === 1)
              .sort()
              .pop()
          : null,
    };

    res.json(response);
  } else {
    console.log(req.body);
    res.status(400).json({ error: "Invalid data format" });
  }
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
