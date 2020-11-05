var express = require('express');
var app = express();


app.get("/api/camisa1", (req, res) => {
    res.json(
        {
            id: 1,
            name: "camisa 1",
            description: "camiseta bonita e legal"
        }
    )
})

app.listen(3000, () => console.log('Server deu bom'))
