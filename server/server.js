const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(4001, () => console.log(`server running on 4001`))