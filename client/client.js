const socket = io("http://localhost:2000"); 

const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('msg-input');
const messageWindow = document.querySelector('.chat-win');
const name = document.getElementById('name');

socket.emit('new-user-joined', name)
// Function to send a chat message
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send', message);
    messageInput.value = '';
});

