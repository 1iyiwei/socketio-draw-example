# socketio-draw-example

This is a very basic collaborative whiteboard application using socket.io.
In order to demonstrate only the very basics I have omitted more advanced features, such as different drawing primitives, undo/redo, history navigation, eraser, etc.
Currently all drawing operations are cached on the server and transmitted at every client operation, so it can get quite slow for more complicated drawings.

## installation ##

Make sure you have [socket.io](http://socket.io/) installed on your machine.

npm install --save express@4.10.2
<br>
npm install --save socket.io

## run ##

On the server side: node server.js

On the client side: point browser to [http://localhost:3000/](http://localhost:3000/).
It is possible to have multiple clients (e.g. multiple browsers/tabs) connecting to the same url above and share the whiteboard.

## Acknowledgement ##

The code is rehashed from various web sources that I have lost track of.
If you like to be credited, please let me know.

