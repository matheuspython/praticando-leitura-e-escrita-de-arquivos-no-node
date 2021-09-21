const express = require("express")
const cors = require("cors")
const path = require('path')
const {uuid} = require("uuidv4")
const leEEscreve = require('./app')


app.use(cors());
app.use(express.json());


const emails = []

const port = process.env.PORT || 8878

app.get('/', (req, res) => res.json(emails))


app.post("/", (req, res) =>{
  const { email, name } = req.body;
  const novoEmail = { id:uuid(), email, name }
  emails.push(novoEmail)

  leEEscreve(emails, path.resolve(__dirname, "..", "emails.json"))
  
  return res.json(novoEmail)
})



app.listen(port, console.log('server rodando'))