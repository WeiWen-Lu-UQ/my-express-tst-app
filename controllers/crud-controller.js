var crudModel = require('../models/crud-model');

const checkPositiveNo = (req, res, no) => {
	if(Math.sign(no) != 1){
		const errData = "Invalid Input!!";
		res.render('crud-operation', {editData: errData});
	}
};

module.exports = {

crudForm: (req, res) => {
	res.render('crud-operation');
},
createCrud: (req, res) => {
	// const createData = crudModel.createCrud();
	// res.send('<h1 style="text-align: center;">' + createData + '</h1>');
	const createId = req.body.createN;
	const createData = crudModel.createCrud(createId);
	checkPositiveNo(req, res, createId);
	res.render('crud-operation', {editData: createData});
},
fetchCrud: (req, res) => {//Retrieve
	// const fetchData = crudModel.fetchCrud();
	// res.send('<h1 style="text-align: center;">' + fetchData + '</h1>');
	const fetchId = req.body.fetchN;
	const fetchData = crudModel.fetchCrud(fetchId);
	checkPositiveNo(req, res, fetchId);
	res.render('crud-operation', {editData: fetchData});
},
editCrud: (req, res) => {
	// const editId = req.params.id;
	const editId = req.body.editN;
	const editData = crudModel.editCrud(editId);
	checkPositiveNo(req, res, editId);
	res.render('crud-operation', {editData: editData, editId: editId});
},
updateCrud: (req, res) => {
	const updateId = req.params.id;
	const updateData = crudModel.updateCrud(updateId);
	// res.send('<h1 style="text-align: center;">' + updateData + '</h1>');
	checkPositiveNo(req, res, updateId);
	res.render('crud-operation', {editData: updateData});
},
deleteCrud: (req, res) => {
	// const deleteId = req.params.id;
	const deleteId = req.body.deleteN;
	const deleteData = crudModel.deleteCrud(deleteId);
	// res.send('<h1 style="text-align: center;">' + deleteData + '</h1>');
	checkPositiveNo(req, res, deleteId);
	res.render('crud-operation', {editData: deleteData});
}

}