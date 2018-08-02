import express from 'express';
const app = express()

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'index.html'));
//   });

app.listen(3000, () => console.log('Example app listening on port 3000!'))
