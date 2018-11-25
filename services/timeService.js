const db = require('../config/db');
const Time = db.Time;

exports.getAllTime = (req, res) => {
  Time.find().then(response => {
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.getOneTimeId = (req, res) => { 
  Time.find({ _id: req.params.id }).then(response =>{
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  })
}

exports.getOneTimeQueryString = (req, res) => { 
  const name = req.query.name;
  Time.find({ name: name} ).then(response => {
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.postTime = (req, res) => { 
  const newTime = new Time({ 
    nome: req.body.nome
  });
  newTime.save().then(response => {
    res.send(newTime);
  }).catch(err => {
      res.status(500).send({ error: err.message });
    });
}

exports.putTime = (req, res) => {
  Time.findOneAndUpdate({ _id: req.params.id }, req.body).then(response => {
    res.send(req.body);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.deleteTime = (req, res) => {
  Time.deleteOne({ _id: req.params.id }).then(response => {
    res.send({success: true});
  }).catch(err => {
      res.status(500).send({ error: err.message });
    });
}