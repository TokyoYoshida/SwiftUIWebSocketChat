import express from 'express'
import * as http from 'http'
import * as socketio from 'socket.io'

const app: express.Express = express()
const server: http.Server = http.createServer(app)

app.use(express.static("public"))

// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//   res.write('Hello')
//   res.end()
// })

// const io = socketio(server)

server.listen(8080)
