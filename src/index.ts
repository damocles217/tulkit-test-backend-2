import express from 'express';
const app = express();
app.use(express.json());
const PORT = process.env.HTTP_PORT || 3000

// Your code starts here. Placeholders for methods are provided for your convenience.

app.post('/todos', function(req, res) {

});

app.get('/users', function(req, res) {

});

app.listen(PORT).on('listening', () => {
    console.info('Listening on port', PORT)
});