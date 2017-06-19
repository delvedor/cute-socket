'use strict'

function Socket (uri) {
  if (!(this instanceof Socket)) {
    return new Socket(uri)
  }

  this.listeners = {}
  this.socket = new window.WebSocket(uri)

  this.socket.onmessage = (event) => {
    var data = toJSON(event.data)
    if (data) {
      if (this.listeners[data.event]) {
        this.listeners[data.event](data)
      } else if (this.listeners['message']) {
        this.listeners['message'](data)
      } else {
        console.error('No handler for event `message`')
      }
    } else {
      if (this.listeners['message']) {
        this.listeners['message'](event.data)
      } else {
        console.error('No handler for event `message`')
      }
    }
  }

  this.socket.onopen = (event) => {
    if (this.listeners['open']) {
      this.listeners['open'](event)
    }
  }

  this.socket.onerror = (event) => {
    if (this.listeners['error']) {
      this.listeners['error'](event)
    }
  }

  this.socket.onclose = (event) => {
    if (this.listeners['close']) {
      this.listeners['close'](event)
    }
  }
}

Socket.prototype.on = function (event, callback) {
  this.listeners[event] = callback
}

Socket.prototype.off = function (event, callback) {
  if (this.listeners[event]) {
    delete this.listeners[event]
  }
}

Socket.prototype.close = function () {
  this.socket.close()
}

Socket.prototype.send = function (data) {
  this.socket.send(data)
}

function toJSON (data) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return undefined
  }
}

module.exports = Socket
