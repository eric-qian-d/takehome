const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks')

const app = express();
const port = 8000;
// const server = http.createServer(app);

app.use(cors({
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeader: ['sessionId'],
  origin: ['http://localhost:3000']
}));


app.get('/', (req, res) => res.send('test'))

app.use('/api/tasks/', tasks)



app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});