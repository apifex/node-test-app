import express from 'express'

const server = express()

const port = 5000
server.get('/test', (req, res)=> {res.send('server works')})


server.listen(port, ()=>console.log('listening on port 5000'))