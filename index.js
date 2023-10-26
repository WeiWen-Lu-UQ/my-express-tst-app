const express = require('express');// 匯入 library
const app = express();// express 匯入的是一個 function
const hostname = "0.0.0.0";// fly.io 使用
const port = process.env.port || 5001;// 若衝突,可考慮一個不易衝突的 port,e.g. 5001

const todoController = require('./controllers/todo')// 匯入 todo controller

const peopleCtrl = require("./controllers/peopleController")// 匯入 peopleController

var crudRouter = require('./routes/crud-route');//匯入這個 router

app.set('view engine', 'ejs')// 設定 view engine

// 建立 todos data
const todos = ['1st todo', '2nd todo', '3rd todo']
/*
app.get('/todos', (req, res) => {
	// 第二個參數可傳入資料
	res.render('todos', {
		todos// 這是省略寫法,原本是「todos: todos」,前後相同
	})
})

// 加上 :id 代表不確定的參數
app.get('/todos/:id', (req, res) => {
	const id = req.params.id// params: 可拿到網址列上指定的參數
	const todo = todos[id]
	res.render('todo', {
		todo// 這是省略寫法,原本是「todo: todo」,前後相同
	})
})
*/
app.get('/hello', (req, res) => {
	res.render('hello')// 叫 express 去 render views 底下叫做 hello 的檔案,副檔名可略
})

// 可直接使用 controller 的方法拿取資料和進行 render
app.get('/todos', todoController.getAll)
app.get('/todos/:id', todoController.get)

app.get("/people-list", peopleCtrl)

app.use('/crud', crudRouter);//上面已匯入這個 router,此處可使用它

app.use(express.urlencoded({ extended: true }));//Then the form values will be on req.body
app.post('/game', (req, res) => {
	res.render('crud-operation', { name: req.body.kukoc });
});

// 使用這個 port,參數分別為 port 和要執行的 function
app.listen(port, hostname, () => {
	console.log(`Example app (Server) listening (running) at http://localhost:${port}`)
	// console.log(`Server running at http://${hostname}:${port}/`);
})
