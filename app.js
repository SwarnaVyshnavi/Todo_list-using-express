const express=require('express');
const todoController=require('./controllers/todoController');
const app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));


todoController(app);

app.listen(3003);
console.log("you r listening to post 3003");

