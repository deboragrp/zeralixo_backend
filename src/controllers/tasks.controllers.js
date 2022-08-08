const Task = require("../models/task.model");

module.exports = {
  async index(req, res) {
    const list = await Task.find();
    res.json(list);
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
      return res.status(400).json("Error");
    }
  },
  async taskByID(req, res) {
    let id_user = req.id;
    const list = await Task.findOne({ id_user });
    res.json(list);
  },
  async deleteTask(req, res) {
    const { _id } = req.params;
    const task = await Task.findByIdAndDelete({ _id });
    return res.json(task);
  },
};
