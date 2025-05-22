import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import session from "express-session";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
const demoCred = {
  username: "demo",
  password: "demo",
};

app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
function isAuthenticated(req, res, next) {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect("/auth");
  }
}
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (username === demoCred.username && password === demoCred.password) {
    req.session.isAuthenticated = true;
    res.redirect("/teacher");
  } else {
    res.redirect("/auth");
  }
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/teacher", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/admin", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/auth", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
