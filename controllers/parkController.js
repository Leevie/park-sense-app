const db = require("../models");

// Defining methods for the parkController
module.exports = {
  findAll: function (req, res) {
    db.Park
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Park
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Data received:", req.body);
    db.Park
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {console.log("I ERROR"); res.status(422).json(err) });
  },
  update: function (req, res) {
    db.Park
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Park
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
