const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

router.get('/people-list', /*async*/ (req, res) => {
	const people = [
		new Person('John Doe', 30),
		new Person('Jane Doe', 25),
		new Person('Bob Smith', 50)
	]
	res.render('people-list', { people })
})

module.exports = router
