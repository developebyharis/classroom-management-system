import express from "express";
import cors from "cors";
import session from "express-session";
import { authRouter } from "./routes/auth.js";
import { isAuthenticated, isTeacher } from "./middleware/isAuthenticated.js";
import { teacherRouter } from "./routes/teacher.js";
import { db } from "./db/db.js";

const PORT = 5000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use("/api/auth", authRouter);
app.use("/api/teacher", isAuthenticated, isTeacher, teacherRouter);


db.query(`select * from credentials`, (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
  console.log("Query results:", results);
});
// db.query(`INSERT INTO credentials (username, password, role) VALUES ("haris123", "haris123", "teacher"),("noman123", "noman123", "admin");`, (err, results) => {
//    if (err) {
//     console.error("Error executing query:", err);
//     return;
//   }
//   console.log("Insert results:", results);

// })
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
