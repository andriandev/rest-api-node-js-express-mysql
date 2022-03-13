const express = require('express');
const db = require('./app/config/database.js');
const router = require('./app/routes/router.js');
const cors = require('cors');

const app = express();
const port = process.env.Port || 3000;

try {
    db.authenticate();
    console.log('Database Connected...');
} catch (e) {
    console.error(e);
}

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(port, () =>{
    console.log(`App running in port ${port}`);
});