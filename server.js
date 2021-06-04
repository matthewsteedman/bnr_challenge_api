const express = require('express');
const port = process.env.PORT || 8000;
const cors = require('cors');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors())

app.use('/api/articles', require('./routes/all_articles'))
app.use('/api/search', require('./routes/search') )

app.listen(port, function() {
    console.log("Listening on port: ", port);
});