


const express = require("express");
const cors    = require("cors");
const { buildIllustrationTable } = require("./buildIllustrationTable");

const app  = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.post("/", (req, res) => {
  try {
    const rows = buildIllustrationTable(req.body);   
    res.json({ rows });                               
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
