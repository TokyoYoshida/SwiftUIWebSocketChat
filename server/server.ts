import * as http from "http"
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.write('Hello')
  res.end()
})

server.listen(8080)
