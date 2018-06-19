const express = require('express')
const app = express()

let leak = []

app.get('/', (req, res) => {
    leak.push(new Array(1024*1024))
    res.send('I just allocated 1MB for later 🙄')
})

app.get('/health', (req, res) => {
    res.status(200).send('')
})

app.listen(3000, () => console.log('Leaky app listening on port 3000!'))