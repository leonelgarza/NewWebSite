const $ = require['jquery']
const path = require('path')
const http = require('http')
const express = require('express') 
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const port = process.env.PORT || 4000

publicDirectoryPath = path.join(__dirname, '../')

/*app.get('/contactMe.html', (req, res) =>{
    console.log(req.query.name,req.query.email, req.query.Comments)
})*/

app.use(express.static(publicDirectoryPath))
app.use(cors())
server.listen(port, () => {
    console.log(`server is up at port ${port}!`)
})