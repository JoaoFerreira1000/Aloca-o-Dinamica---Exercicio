const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/livro", function (req, res) {
    res.json(data);
});

app.get("/livro/:id", function (req, res) {
    const { id } = req.params;
    const livro = data.find(li => li.id == id);

    if (!livro) return res.status(204).json();

    res.json(livro);
});

app.post("/livro", function (req, res) {
    const { nome, autor } = req.body;

    res.json({ nome, autor });
});

app.put("/livro/:id", function (req, res) {
    const { id } = req.params;
    const livro = data.find(li => li.id == id);

    if (!livro) return res.status(204).json();

    const { nome } = req.body;

    livro.nome = nome;

    res.json(livro);
});

app.delete("/livro/:id", function (req, res) {
    const { id } = req.params;
    const livroFiltered = data.filter(livro => livro.id != id);

    res.json(livroFiltered);
});

app.listen(3000, function () {
    console.log("Server is running in http://localhost:3000/livro");
});
