const express = require('express');
const db = require('./models/db');
const employeeController = require('./controllers/employeeController');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());


app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('This is the Homepage  <button><a href="/employee">Check employee<a></button>')
})

app.use('/employee', employeeController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))