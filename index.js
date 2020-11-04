var express = require('express');
var app = express();


app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "camisa 1",
            description: "camiseta bonita e legal",
            price: 55.99,
            active: true
        },
        {
            id: 2,
            name: "camisa 2",
            description: "camiseta muitooo bonita e legal",
            price: 40.99,
            active: true
        },
        {
            id: 3,
            name: "camisa 3",
            description: "camiseta feia e triste",
            price: 100.99,
            active: false
        },
        {
            id: 4,
            name: "camisa 4",
            description: "camiseta foda pra krll",
            price: 55.99,
            active: true
        },
    ])
})

app.listen(3000, () => console.log('Server deu bom'))