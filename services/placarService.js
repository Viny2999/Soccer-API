const db = require('../config/db');
const Placar = db.Placar;

exports.getAllPlacar = (req, res) => {
  Placar.find().then(response => {
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.getOnePlacarId = (req, res) => { 
  Placar.find({ _id: req.params.id }).then(response =>{
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  })
}

exports.getOnePlacarQueryString = (req, res) => { 
  const name = req.query.name;
  Placar.find({ name: name} ).then(response => {
    res.send(response);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.postPlacar = (req, res) => { 
  const newPlacar = new Placar({ 
    timeA: req.body.timeA, 
    timeB: req.body.timeB, 
    placarA: req.body.placarA, 
    placarB: req.body.population
  });
  newPlacar.save().then(response => {
    res.send(newPlacar);
  }).catch(err => {
      res.status(500).send({ error: err.message });
    });
}

exports.putPlacar = (req, res) => {
  Placar.findOneAndUpdate({ _id: req.params.id }, req.body).then(response => {
    res.send(req.body);
  }).catch(err => {
    res.status(500).send({ error: err.message });
  });
}

exports.deletePlacar = (req, res) => {
  Placar.deleteOne({ _id: req.params.id }).then(response => {
    res.send({success: true});
  }).catch(err => {
      res.status(500).send({ error: err.message });
    });
}