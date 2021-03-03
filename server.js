const express = require('express')

//instance von express, for backend a server is also an app
const app = express()
// unter welchen Port soll das Server gestartet werden
app.use((req, res) => {
    console.log(req.method, req.url)
    res.end('Hello world')
})
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})
