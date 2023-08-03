const express = require('express')
const app = express();

app.post('/api', (req, res) => {
    
    console.log("Hi");
    var operator = req.query.operator;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var res1 = 0;
    switch(operator) {
        case "add":
            res1 = a + b;
            break;
        case "sub":
            res1 = a - b;
            break;
        case "mult":
            res1 = a * b;
            break;
        case "div":
            res1 = a / b;
            break;
        default:
            res1 = "Sorry enter valid operator";
              
    }

    res.json(res1);

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));