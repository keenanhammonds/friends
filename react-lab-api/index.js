const express = require("express");
const parser = require('body-parser');
const app = express();
const cors = require('cors')
const User = require('./db/models')

app.use(parser.json())
app.use(cors())

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
});
