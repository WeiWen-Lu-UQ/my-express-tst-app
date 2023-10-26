module.exports = {

createCrud: createId => {
	data = "Form data was inserted by the person with id: " + createId;
	return data;
},
fetchCrud: fetchId => {//Retrieve
	data = "Data was fetched by the person with id: " + fetchId;
	return data;
},
editCrud: editId => {
	data = "Data was edited by the person with id: " + editId;
	return data;
},
updateCrud: updateId => {
	data = "Data was updated by the person with id: " + updateId;
	return data;
},
deleteCrud: deleteId => {
	data = "Data was deleted by the person with id: "+ deleteId;
	return data;
}

}