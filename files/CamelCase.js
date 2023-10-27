const express = require("express");
const app = express();
const port = process.env.PORT ?? 4444;

app.use(express.json())

app.patch("/api/strings", (req, res) => {
    const {strings} = req.body
    console.log(req.body)
    if(strings.length === 0){
        res.sendStatus(404)
    } 
    const camelCase = strings.map(e => e = e[0].toUpperCase() + e.slice(1)).join('')
    res.status(200).json({"CamelCase": camelCase})
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});