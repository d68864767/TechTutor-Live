const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle joining a live session
  socket.on('joinLiveSession', (sessionId, learnerId) => {
    console.log(`User ${learnerId} joined live session ${sessionId}`);
    // Add logic to handle joining a live session
  });

  // Handle disconnecting from the live session
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    // Add logic to handle disconnecting from the live session
  });
});

// Start the server
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Live session server is running on port ${port}`);
});
