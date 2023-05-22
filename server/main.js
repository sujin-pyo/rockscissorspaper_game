// 터미널에 npm install express
const express = require("express");
const app = express();
const port = 8080; // default port

//웹 서버가 정적 파일을 서비스해야함(index.html, main.js)
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // listen on port
