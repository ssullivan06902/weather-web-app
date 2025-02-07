const express = require('express');
const apiKey = require('./config');
const app = express();
const port = 3000;

app.get('/api-key', (req, res) => {
    res.json({ apiKey });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
