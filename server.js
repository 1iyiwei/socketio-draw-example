"use strict";

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));

class Point
{
    constructor(x, y, drag)
    {
        this.x = x;
        this.y = y;
        this.drag = drag;
    }
}

var points = new Array();
var paint = false;

function addClick(x, y, dragging)
{
    var point = new Point(x, y, dragging);
    points.push(point);
}

function onDraw(point)
{
    addClick(point.x, point.y, point.dragging);
    io.emit('redraw', points);
}

function onDisconnect()
{
    console.log('user disconnected');
}

function onConnect(socket)
{
    console.log('we have a new connection');
    // socket.emit('message', new Point(3, 4, false));
    socket.on('draw', onDraw);
    
    socket.on('disconnect', onDisconnect);
}

io.on('connection', onConnect);
 
function onListen() 
{
    console.log('Server running on localhost:'+app.get('port'));
}

server.listen(app.get('port'), onListen);

