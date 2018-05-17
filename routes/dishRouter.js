const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
  let dishId = req.params.dishId
  res.end(`Will get dish number ${dishId} to you!`);
})
.put((req, res, next) => {
    let dishId = req.params.dishId
      res.end(`Will update dish number ${dishId} for you!`);
})
.post((req, res, next) => {
    let dishId = req.params.dishId
      res.end(`Will create dish number ${dishId} for you!`);
})
.delete((req, res, next) => {
    let dishId = req.params.dishId
      res.end(`Will delete dish number ${dishId} for you!`);
})


module.exports = dishRouter;
