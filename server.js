const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req,res,next) => {
    res.send('hello world');
});

app.get('*', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (req, res) => {
    res.send('React app running');
    console.log(`App listening on ${PORT}`);
})