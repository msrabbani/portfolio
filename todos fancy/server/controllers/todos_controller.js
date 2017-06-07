const Todos = require('../models/todos_model');

function getAll(req, res) {
  Todos.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function createTodo(req, res) {
  Todos.create({
    userid: req.body.userid,
    memo:   req.body.memo,
    status: req.body.status
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function updateTodo(req, res) {
  Todos.find({
    _id: req.params.id
  }, function(err, todo) {
    Todos.update({
      _id: todo[0]._id
    }, {
      $set: {
        userid: req.body.userid || todo[0].userid,
        memo:   req.body.memo || todo[0].memo,
        status: req.body.status || todo[0].status
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

function deleteTodo(req, res) {
  Todos.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function deleteTodos(req, res) {
  Todos.remove({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

module.exports = {
  getAll, createTodo, updateTodo, deleteTodo, deleteTodos
}
