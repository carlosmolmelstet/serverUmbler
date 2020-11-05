var express = require('express');
var app = express();


app.get("/", (req, res) => {
    res.json(
        {
            id: 1,
            name: "camisa 1",
            description: "camiseta bonita e legal",
            price: 55.99,
            active: true
        }
    )
})

app.listen(3000, () => console.log('Server deu bom'))
