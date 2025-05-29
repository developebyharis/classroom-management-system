import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

const routes = ["/", "/teacher", "/admin", "/auth"];

routes.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
