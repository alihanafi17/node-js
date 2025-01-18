const http = require("http");
const { readFileSync } = require("fs");

// get all files
const page = readFileSync("./templates/page.html");
const aboutPage = readFileSync("./templates/about.html");
const contactPage = readFileSync("./templates/contact.html");
const pageStyle = readFileSync("./styles/page.css");
const aboutStyle = readFileSync("./styles/about.css");
const contactStyle = readFileSync("./styles/contact.css");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  console.log(url);
  // home page
  if (url === "/" || url === "/page.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(page);
    res.end();
  }
  // about page
  else if (url === "/about.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  }
  // contact page
  else if (url === "/contact.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactPage);
    res.end();
  }
  // styles
  //home style
  else if (url === "/page.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(pageStyle);
    res.end();
  }
  // about style
  else if (url === "/about.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(aboutStyle);
    res.end();
  }
  // contact style
  else if (url === "/contact.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(contactStyle);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(3000);
