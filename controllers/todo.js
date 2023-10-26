const todoModel = require("../models/todoModel")// 先從 model 匯入 todos 資料

// 建立一個 todoController 物件,透過方法來存取 model 的資料
const todoController = {
	// 傳入參數 req, res
	getAll: (req, res) => {
		const todos = todoModel.getAll()
		res.render('todos', {
			todos
		})
	},

	get: (req, res) => {
		const id = req.params.id
		const todo = todoModel.get(id)
		res.render('todo', {
			todo
		})
	}
}

module.exports = todoController
