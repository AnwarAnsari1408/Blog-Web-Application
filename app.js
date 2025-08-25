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

//Adding a middleware to display flash messsages upon creation, updation or deletion of a post.
let flashMessage = null;

app.use((req, res,next) => {
  res.locals.flashMessage = flashMessage;
  flashMessage = null;
  next();
});

// GET Homapage Route
app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

// Get /new, displays a form to create a new blog post
app.get("/new", (req, res) => {
  res.render("new");
});

// POST /new, handles submission of the new blog post form
app.post("/new", (req, res) => {
  const { title, content } = req.body;
  posts.push({id: nextId++, title, content});
  flashMessage = "✅ Post created successfully!";
  res.redirect("/");
});

// GET /edit/:id, displays a form to edit an existing post
app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// POST /edit/:id, handles submission of the edit form
app.post("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    flashMessage = "✏️ Post updated successfully!";
  }
  res.redirect("/");
});

// POST /delete/:id, deletes a blog post
app.post("/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  flashMessage = "🗑️ Post deleted successfully!";
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
