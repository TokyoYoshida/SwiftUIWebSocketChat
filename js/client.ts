import { format } from 'path'
import io from 'socket.io-client'
const socket: SocketIOClient.Socket = io('http://localhost:8080')

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

form?.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  socket.emit('message', input?.value)
  input!.value = ''
})

socket.on('message', (msg: string) => {
  ul!.insertAdjacentElement('beforebegin', document.createElement(`<li>${msg}</li>`))
})
