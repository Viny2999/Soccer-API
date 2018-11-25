const mongoose = require('mongoose');
const dbConfig = require('../config/datasource');

mongoose.connect(dbConfig.mlab.url , { useNewUrlParser: true });

const timeSchema = new mongoose.Schema({
  nome: String
}, { collection: 'Time' });

const time = mongoose.model('Time', timeSchema);

const placarSchema = new mongoose.Schema({
  timeA: String,
  timeB: String,
	placarA: String,
	placarB: String
}, { collection: 'Placar' });

const placar = mongoose.model('Placar', placarSchema);

module.exports = { Mongoose: mongoose, TimeSchema: timeSchema, PlacarSchema: placarSchema, Time: time, Placar: placar }