const express = require('express');
const app = express();
const router = require("./routes");
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(router);
app.listen(port, () => console.log(`running in port ${port}`));