const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/");
let res = "";
for (let i = 1; i < 11; i++) {
  const txt = fs.readFileSync(`${i}.txt`, "utf-8");
  const arr = txt.split("\r\n");
  for (let j = 0; j < i; j++) if (arr[j] != "") res += arr[j] + "\n";
}
fs.writeFileSync(`${dirPath}/output.txt`, res);
