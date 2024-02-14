// import express from "express";
// import { dirname , join } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// app.use(express.static(join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, "public", "index.html"));
// });

// app.post('/submit', (req, res) => {
//     res.sendFile(join(__dirname, "public", "chat.html"));
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); 
const messageForm = document.querySelector('form');
const messageInput = document.getElementById('msg-input');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send', message);
    messageInput.value = '';
});

socket.on('receive', (data) => {
    const msgWin = document.querySelector('.chat-win');
    const newMessage = document.createElement('div');
    newMessage.className = 'msg';
    newMessage.textContent = `${data.name}: ${data.message}`;
    msgWin.appendChild(newMessage);
});
