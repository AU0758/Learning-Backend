let express = require('express');
let app = express();

console.log('Hello world')

indexPath = __dirname + '/views/index.html'
stylePath = __dirname + '/public/style.css'

app.get(
    '/',
    function(req, res) {
        res.send('Hello Express');
    }
);
app.get(
    '/',
    function(req, res) {
        res.sendFile(indexPath);
    }
);
app.use(
    '/',
    express.static(stylePath);
)


res.sendFile(stylePath);
module.exports = app;
