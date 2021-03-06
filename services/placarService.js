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

exports.postPlacar = (req, res) => { 

  if (req.body.placarA == undefined) {
    req.body.placarA = '0';
  }

  if (req.body.placarB == undefined) {
    req.body.placarB = '0';
  }

  const newPlacar = new Placar({ 
    timeA: req.body.timeA, 
    timeB: req.body.timeB,
    miniA: req.body.miniA, 
    miniB: req.body.miniB, 
    placarA: req.body.placarA, 
    placarB: req.body.placarB
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