var express = require('express');
var router = express.Router();
var crudController = require('../controllers/crud-controller');

router.use(express.urlencoded({ extended: true }));//Then the form values will be on req.body

// curd form route
router.get('/form', crudController.crudForm);

// create data route
router.post('/create', crudController.createCrud);

// display data route //Retrieve
router.get('/fetch', crudController.fetchCrud);
router.post('/fetch', crudController.fetchCrud);

// edit data route
router.get('/edit/:id', crudController.editCrud);
router.post('/edit', crudController.editCrud);

// update data route
router.post('/edit/:id', crudController.updateCrud);

// delete data route
router.get('/delete/:id', crudController.deleteCrud);
router.post('/delete', crudController.deleteCrud);

module.exports = router;
