const express = require('express');
const app = express();

const indexRouter = require('./routers/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use('/', indexRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});