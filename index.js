const express = require("express");
const App = express();

App.get("/", (req, res) => {
  res.send(
    "Hola este es mi primer entregable de devops, realizado por Yeison Andres Valencia Vargas"
  );
});

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log("server is running on port ${PORT}");
});
