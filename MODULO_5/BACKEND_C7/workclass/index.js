import express from "express";

const app = express();
const port = 3000;

app.get("/tutoriales/como-crear-una-pagina-web", (req, res) => {
  res.send("hello world");
});

app.all("/esta-es-una-ruta-all", (req, res) => {
  res.send("hola mundo");
});

app.post("/post", (req, res) => {
  res.send("este es un post");
});

app.put("/put", (req, res) => {
  res.send("este es un put");
});

app.delete("/delete", (req, res) => {
  res.send("este es un delete");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
