'use strict';
var express = require('express');
var exphbs = require('express-handlebars');
var port = process.env.port || 5000;
var app = express();
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        checkActivePage: function (currentPage, desiredPage) {
            return currentPage === desiredPage ? 'active' : '';
        }
    }
}));
app.set('view engine', '.hbs');
app.get('/', function (req, res) {
    res.render('home', {
        partials: {
            scripts: '<script src="/js/home.js"></script>'
        }
    });
});
app.get('/grids', function (req, res) {
    res.render('grids');
});
app.get('/forms', function (req, res) {
    res.render('forms');
});
app.use(express.static('public/'));
app.listen(port, function () {
    console.log('borwnbag.partIII server listening on: ' + port);
});
//# sourceMappingURL=server.js.map