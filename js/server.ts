import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const app: express.Express = express()
const server: http.Server = http.createServer(app)
const io: socketio.Server = new socketio.Server(server)

app.use(express.static("public"))

io.on('connection', (socket: socketio.Socket) => {
  socket.on('message', (msg: string) => {
    io.emit('message', msg)
  })
})

server.listen(8080)
