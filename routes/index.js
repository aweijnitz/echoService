const appConf = require('../conf/appConfig.json');
const express = require('express');
const router = express.Router();

const log4js = require('log4js');
log4js.configure('./conf/log4js.json');
const logger = log4js.getLogger("index");


// Load route handlers (doubling as rudimentary MVC controllers)

// Remember, in Express 4, '/' is the root under which this route is mounted, so does not
// necessarily correspond to the absolute root of the domain.
//
router.get('*', function(req, res) {
  //res.render('index', { title: 'echo service' });
    let result = {
        path: req.path,
        query: req.query,
        cookies: req.cookies,
        body: req.body,
        method: req.method,
        ip: req.ip,
        originalUrl: req.originalUrl
    };
    logger.debug('Serving / --> ' + JSON.stringify(result));
    res.json(result);
});



module.exports = router;
