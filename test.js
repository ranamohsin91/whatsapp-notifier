const axios = require('axios');

axios.post('http://localhost:3000/send-message', {
  to: '923314894820@c.us',  // <-- Replace this with your own WhatsApp number
  message: 'Hello from my Node.js app! 🎉'
})
.then(response => {
  console.log('Message sent successfully:', response.data);
})
.catch(error => {
  console.error('Error sending message:', error.message);
});
