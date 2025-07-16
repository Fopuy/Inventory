const express = require('express');
const Router = express.Router;
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Express Inventory' });
});

module.exports = indexRouter;