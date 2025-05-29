import { db } from "../db/db.js";



export function loginUser(req, res) {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM credentials WHERE username = ?",
    [username, password],
    (err, user) => {
      console.log("User data:", user);
      if (err)
        return res
          .status(500)
          .json({ success: false, message: "Database error" });
      if (user.length === 0) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
      req.session.user = {
        id: user.id,
        username: user[0].username,
        password: user[0].password,
        role: user[0].role,
      };
      console.log("User logged in:", req.session.user);
      res.status(200).json({ success: true, user: req.session.user });
    }
  );
}

export function registerUser(req, res) {}
