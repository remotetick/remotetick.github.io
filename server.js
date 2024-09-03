const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/:gameName', (req, res) => {
    res.sendFile(__dirname + `/public/${req.params.gameName}.html`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
