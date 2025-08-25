// This imports all the necessary dependancies using modern ESM standard.
import express from "express";
import bodyParser from "body-parser"

// This creates an instance for express application.
const app = express();
const port = 3000;

let posts = [];
let nextId = 1;

// The middleware processes incoming requests before they reach our routes.
// The bodyParser.urlencoded middleware parses data from HTML forms and stores it in req.body.

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

// This sets view engine as ejs and tells express to use EJS to render templatesl.
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  const { title, content } = req.body;
  posts.push({id: nextId++, title, content});
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).send("Post not found");
  res.render("edit", { post });
});

app.post("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
  }
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
