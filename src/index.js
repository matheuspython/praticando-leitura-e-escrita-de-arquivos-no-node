const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8878

app.get('/', (req, res) => res.json(
  {"message": "oie"}))

app.listen(port, console.log('server rodando'))