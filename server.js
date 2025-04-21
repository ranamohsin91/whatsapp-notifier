const express = require('express');
const { create } = require('@open-wa/wa-automate');

const app = express();
const PORT = 3000;

app.use(express.json());

create().then((client) => {
  console.log('WhatsApp client is ready');

  app.post('/send-message', async (req, res) => {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ error: 'Missing "to" or "message" field' });
    }

    try {
      await client.sendText(to, message);
      return res.json({ success: true, to, message });
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ success: false, error: error.message });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
