const { Employee } = require('./../models')

const employeeController = {
  get: (req, res) => {
    Employee.findAll().then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
      })
    })
  },
  get_by_id: (req, res) => {
    Employee.findOne({
      where: {
        id: req.params.id,
      },
    }).then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
      })
    })
  },
  create: (req, res) => {
    const { name, addres, phone, email, status } = req.body
    Employee.create({
      name,
      addres,
      phone,
      email,
      status,
    })
      .then(() => {
        res.status(201).json({
          status: 'success',
          data: req.body,
          message: 'Data Employee berhasil ditambahkan!',
        })
      })
      .catch((err) => {
        res.status(400).json({
          status: 'fail',
          data: req.body,
          message: err.message,
        })
      })
  },
  update: (req, res) => {
    const { name, addres, phone, email } = req.body;
    Employee.update({
        name, addres, phone, email
    }, {
        where : {
            id: req.params.id
        }
    }).then(() => {
        res.status(202).json({
          status: 'success',
          data: req.body,
          message: 'Data Employee berhasil diubah!',
        })
      })
      .catch((err) => {
        res.status(400).json({
          status: 'fail',
          data: req.body,
          message: err.message,
        })
      })
  },
  delete: (req, res) => {
    Employee.destroy({
        where : {
            id: req.params.id
        }
    }).then(() => {
        res.status(202).json({
          status: 'success',
          message: 'Data Employee berhasil didelet!',
        })
      })
      .catch((err) => {
        res.status(400).json({
          status: 'fail',
          message: err.message,
        })
      })
  },
}

module.exports = employeeController
