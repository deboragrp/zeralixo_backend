const Task = require("../models/task.model");

module.exports = {
  async index(req, res) {
    try {
      const list = await Task.find();
      res.json(list);
    } catch {
      return res.status(400).json("Erro ao encontrar as tasks!");
    }
  },
  async create(req, res) {
    try {
      const { title, status, date } = req.body;
      const createTask = await Task.create({
        id_user: req.id,
        title,
        status,
        date,
      });
      res.json({ createTask });
    } catch {
      return res.status(400).json("Erro ao criar uma task!");
    }
  },
  async taskByID(req, res) {
    try {
      let id_user = req.id;
      const list = await Task.findOne({ id_user });
      res.json(list);
    } catch {
      return res.status(400).json("Erro ao encontrar suas tasks!");
    }
  },
  async deleteTask(req, res) {
    try {
      const { _id } = req.params;
      const task = await Task.findByIdAndDelete({ _id });
      return res.json(task);
    } catch {
      return res.status(400).json("Erro ao deletar task!");
    }
  },
};
