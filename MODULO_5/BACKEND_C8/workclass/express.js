import express from "express";

const server = express();
const port = 3008;

server.use("/static", express.static("public"));

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
