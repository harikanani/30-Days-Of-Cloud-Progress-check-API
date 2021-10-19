const express = require("express");
const apiRouter = require("./router");
const app = express();

const PORT = process.env.PORT || 5000;

// add express body parser to app
app.use(express.json());

// add API Router to app
app.use("/", apiRouter);

app.listen(PORT, (req, res) => {
	console.log(`server up and running at http://localhost:${PORT}/`);
});
