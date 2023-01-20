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
    // 1. membaca data req [data request]
    console.log(req.headers);
    console.log(req.body);

    // 2 pengelopokan body request
    // { ini isi dari req.body
    //   name: 'sdsd',
    //   addres: 'sdsd',
    //   phone: 'sdsd',
    //   email: 'sdsd'
    // }
    const { name, addres, phone, email, status } = req.body

    // 3 menjalankan function querybuilder untuk query create data insert ke table
    // INSERT INTO "Employees" ("id","name","addres","phone","email","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6) RETURNING "id","name","addres","phone","email","status","createdAt","updatedAt";
    Employee.create({
      name,
      addres,
      phone,
      email,
      status,
    })
      .then(() => {
        // res.status(201).json({
        //   status: 'success',
        //   data: req.body,
        //   message: 'Data Employee berhasil ditambahkan!',
        // })

        // const message = 'Data Employee berhasil ditambahkan!'
        // res.render('success', {
        //   message
        // })

        // 4 return success insert
        res.redirect("/employee");
      })
      .catch((err) => {
        // 4 return gagal insert

        res.status(400).json({
          status: 'fail',
          data: req.body,
          message: err.message,
        })
      })
  },
  update: (req, res) => {
    const { name, addres, phone, email } = req.body
    Employee.update(
      {
        name,
        addres,
        phone,
        email,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )
      .then(() => {
        // res.status(202).json({
        //   status: 'success',
        //   data: req.body,
        //   message: 'Data Employee berhasil diubah!',
        // })

        // const message = 'Data Employee berhasil diubah!'
        // res.render('success', {
        //   message
        // })

        res.redirect("/employee");
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
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        // const message = 'Data Employee berhasil didelet!'
        // res.render('success', {
        //   message
        // })

        res.redirect("/employee");

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
