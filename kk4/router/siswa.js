const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const siswacontroller = require('../router/controllers/siswa')



// nampilna kabeh data
  router.get('/allsiswa', siswacontroller.index)
// nampilna data by id
  router.get('/siswa/:id', siswacontroller.show)
// nambahna data
    router.post('/siswa', siswacontroller.store)
// ngedit
    router.put('/siswa/:id', siswacontroller.update)
// hapus
    router.delete('/siswa/:id', siswacontroller.delete)
    module.exports = router