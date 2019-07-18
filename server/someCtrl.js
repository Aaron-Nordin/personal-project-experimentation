const userLib = require("./userLib");

let id = 4

module.exports = {
  getInitialLib(req, res) {
    res.status(200).send(userLib);
  },

  addData(req, res) {
      userLib.push({...req.body, id})
      id++
      res.status(200).send(userLib)
  },

  deleteData(req, res) {
      let {id} = req.params
      let index = userLib.findIndex(x => x.id === +id)
      userLib.splice(index, 1)
      res.status(200).send(userLib)
  },

  editName(req, res) {
      let {id} = req.params
      let {name} = req.body
      let index = userLib.findIndex(x => x.id === +id)
      userLib[index].name = name
      res.status(200).send(userLib)
  }
};
