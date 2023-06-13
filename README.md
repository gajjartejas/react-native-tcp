# TCP in React Native

node's [net](https://nodejs.org/api/net.html) API in React Native

This module is used by [Peel](http://www.peel.com/)

## Install

```
npm install gajjartejas/react-native-tcp --save

npx pod-install
or
cd ios && pod install && cd ..
```

## Usage

_see/run [index.ios.js/index.android.js](examples/rctsockets) for a complete example, but basically it's just like net_

```js
const net = require("react-native-tcp");

const server = net
  .createServer(function (socket) {
    socket.write("excellent!");
  })
  .listen(12345);

const client = net.createConnection(12345);

client.on("error", function (error) {
  console.log(error);
});

client.on("data", function (data) {
  console.log("message was received", data);
});
```

### TODO

1. Use Typescript

PR's welcome!

_originally forked from [react-native-udp](https://github.com/tradle/react-native-udp)_
