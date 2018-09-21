import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

function make (config) {
  config.server = config.server || 'http://localhost'
  const socket = io(config.server {
    transports: ['websocket']
  })

  const api = feathers()
    .configure(socketio(socket))
    .configure(auth({ storage: window.localStorage }))
  if (config.services.length) {
    config.services.forEach(s => {
      api.service(s)
    })
  }
  return api
}
export default {
  make: make
}