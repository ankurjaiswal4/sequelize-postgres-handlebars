const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

//Verify Connection Establish
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public ')))

//Set view engine as handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//default route
app.get('/', (req, res, err) => {
    res.send("Hello");
});

//user routes
app.use('/user', require('./routes/user'));

//Start app on port
app.listen(PORT, console.log(`Server started on port ${PORT}`));