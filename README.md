# tiny-socket
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![stability](https://img.shields.io/badge/stability-experimental-orange.svg)

A tiny WebSocket library.

## Usage
```js
const socket = require('./socket')('ws://localhost:3000')

socket.on('open', () => {
  socket.send('hello!')
  console.log('socket opened!')
})

socket.on('message', msg => {
  console.log('New message:', msg)
})
```

Custom events are supported via JSON.  
Example:
```js
// JSON:
// {
//    event: 'custom-event'
//    message: 'hello world!',
//    payload: 'eiubgoerunf984h3r8f8hr04f'
//  }

socket.on('custom-event', msg => console.log) // Will print the above json object
```

## API
- <a href="#on">socket.**on()**</a>
- <a href="#off">socket.**off()**</a>
- <a href="#send">socket.**send()**</a>
- <a href="#close">socket.**close()**</a>

<a name="on"></a>
#### **.on(event, callback)**
Register a callback for the given event.
- `'open'`
- `'close'`
- `'message'`
- `'error'`

Custom events are also supported if the message is a JSON with an `'event'` field.

<a name="off"></a>
#### **.off(event)**
Unregister from an event.

<a name="send"></a>
#### **.send(payload)**
Sends data through the socket, the payload must be a string or binary data.

<a name="close"></a>
#### **.close()**
Close the socket connection.

## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/tiny-socket/blob/master/LICENSE)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2016 Tomas Della Vedova
