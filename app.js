const express = require("express");
const app = express();
let users = [{ id: 1, name: "Younes", age: 19 }];

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// JSONPARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static('public'));


app.get("/", async function (req, res) {
  res.render("index", { users: users });
});
app.get("/users/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.render('detail',{user:user});

});
app.get('/create-user',async(req,res)=>{
    res.render('create-user');
})
app.post("/", async (req, res) => {
  const user = req.body;
  user.id = users[users.length - 1].id + 1;

  users.push(user);

//   res.send({
//     message: "user created",
//     data: user,
//   });
  res.render("index", { users: users });
});

app.listen(8000, console.log("app runing"));
