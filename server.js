const app = require('./src/app.js')
require('dotenv').config()

const PORT = process.env.PORT || 4200
const HOST = '0.0.0.0'

app.get('/', (req, res) => res.send('Hello world'))

app.listen(PORT, HOST, () => console.log('> The server is running on port: ' + PORT))