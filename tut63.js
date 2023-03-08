// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing</title>
      <style>
  .container{
      border: 2px solid red;
      background-color: rgb(196, 223, 43);
      margin: 34px auto;
      padding: 34px;
      width: 666px;
  }
  a{
      text-decoration: none;
      color: black;
  }
  a:hover{
      color: rgb(41, 6, 8);
      background-color: rgb(221, 221, 240);
  }
  a:visited{
      background-color: yellow;
  }
  a:active{
      background-color: darkblue;
  }
  .btn:hover{
      color: darkgoldenrod;
      background-color: aqua;
      border: 2px solid black;
  
  }
  .btn{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-weight: bold;
      background-color: rgb(233, 12, 41);
      padding: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      border-radius: 4px;
  }
  
      </style>
  </head>
  <body>
      <div class="container" id="cont">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet officia corporis impedit ipsam eius consectetur nemo modi doloremque. Veniam omnis alias iure qui nam? Nobis assumenda eos iste saepe quo architecto voluptatibus aspernatur!</p>
          <a href="https://www.twitter.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});