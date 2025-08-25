# 📝 Blog Web Application

![Node.js](https://img.shields.io/badge/Node.js-v18+-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Express](https://img.shields.io/badge/Express-v4.18-blueviolet)

A **simple blog web application** built with **Node.js**, **Express.js**, and **EJS**. Supports full **CRUD operations** and displays **flash messages** for user feedback.

---

## 🌟 Features

* View all blog posts
* Add, edit, and delete posts
* Flash messages for success notifications
* Header and footer partials for consistent layout
* Styled with clean CSS
* Uses modern **ESM module syntax**

---

## ⚡ Tech Stack

* **Node.js**
* **Express.js**
* **EJS**
* **CSS**
* **Body-parser**

---

## 📂 Project Structure

```
blog-app/
│
├─ public/              # Static assets
│   └─ styles.css
├─ views/               # EJS templates
│   ├─ partials/        # header, footer, flash
│   ├─ index.ejs
│   ├─ new.ejs
│   └─ edit.ejs
├─ app.js               # Express server
├─ package.json
└─ README.md
```

---

## 🚀 Setup & Run

1. Clone the repo:

```bash
git clone https://github.com/your-username/blog-web-app.git
cd blog-web-app
```

2. Install dependencies:

```bash
npm install express ejs body-parser
```

3. Start the server:

```bash
node app.js
```

4. Open in browser: [http://localhost:3000](http://localhost:3000)

---

## 🖊 Usage

* **Homepage `/`** – View all posts
* **Add New `/new`** – Create a new post
* **Edit `/edit/:id`** – Edit an existing post
* **Delete** – Remove a post
* **Flash messages** – Appear after create, edit, delete

---

## 🎨 Styling

* CSS in `public/styles.css`
* Flash messages fade automatically
* Clean form and post list layout

---

## ⚙ Notes

* Posts are stored **in memory** → lost on server restart
* For multi-user apps, use **express-session + connect-flash**
* Database integration (MongoDB/SQLite) is recommended for persistence

---

## 📌 Future Enhancements

* User authentication
* Persistent database storage
* Categories/tags for posts
* Responsive and modern UI
* Multiple flash message types (success, error, warning)

---

## 📝 License

MIT License – free to use and modify.
