const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

app.post("/register", (req, res) => {
    console.log(req.body)
    res.send({"succed": "true"})
})

app.listen(5050, () => {
    console.log("Server started on port 5050")
})