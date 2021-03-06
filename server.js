const express = require("express");
const port = process.env.PORT || 8080;
// const serveStatic = require("serve-static");
// const path = require("path");

const app = express();

// serves files from our dist directory which now contains our index.html
// app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
	res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);
console.log("listening on port: " + port);
