const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
  let leaderId = req.params.leaderId
  res.end(`Will send leader number ${leaderId} to you!`);
})
.put((req, res, next) => {
    let leaderId = req.params.leaderId
      res.end(`Will update leader number ${leaderId} for you!`);
})
.post((req, res, next) => {
    let leaderId = req.params.leaderId
      res.end(`Will create leader number ${leaderId} for you!`);
})
.delete((req, res, next) => {
    let leaderId = req.params.leaderId
      res.end(`Will delete leader number ${leaderId} for you!`);
})


module.exports = leaderRouter;
