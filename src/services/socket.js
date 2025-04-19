export const socket = new WebSocket('ws://localhost:3001');

socket.onopen = () => console.log('Socket connected');
socket.onmessage = (e) => console.log('Message:', e.data);
