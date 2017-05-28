const Memos = require('../models/memos_model');
const Users = require('../models/users_model');

function getAll(req, res) {
  Memos.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Memos.find({
    'creator': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function createMemo(req, res) {
  Memos.create({
    creator:  req.body.creator,
    memo:     req.body.memo
  }, function(err, memo) {
    if (err) {
      res.send(err.message);
    }
    Users.findById(req.body.creator, function(err, user) {
      user.memo_list.push(memo._id);
      user.save(function(err) {
        if (err) res.send(err.message);
        console.log("Add memo Success..");
        res.send(user);
      });
    });
  });
}

function updateMemo(req, res) {
  Memos.find({
    '_id' : req.params.id
  }, function(err, user) {
    Memos.update({
      '_id': user[0]._id
    }, {
      $set: {
        creator:  req.body.creator || user[0].creator,
        memo:     req.body.memo || user[0].memo
      }
    }, function(err, result) {
      if (err) res.send(err.message);
      res.send(result);
    });
  });
}

function deleteMemo(req, res) {
  Memos.remove({
    '_id': req.params.id
  }, function(err, memo) {
    if (err) {
      res.send(err.message);
    }
    res.send(memo);
  });
}

module.exports = {
  getAll, getSingle, createMemo, deleteMemo, updateMemo
}
