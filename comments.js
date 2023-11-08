// Create web server
// 1. Create web server
// 2. Read file
// 3. Read data from database
// 4. Write data to database
// 5. Redirect
// 6. 404 not found
// 7. Read data from database

// 1. Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// 2. Read file
function templateHTML(title, list, body, control) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <h3>${list}</h3>
    ${control}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = '<ul>';
  var i = 0;

  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }

  list += '</ul>';

  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // 쿼리 스트링을 객체로 반환
  var pathname = url.parse(_url, true).pathname; // 쿼리 스트링을 제외한 주소를 반환

  if (pathname === '/') {
    // 3. Read data from database
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist);
        var template = templateHTML(
          title,
          list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );

        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', function (error, filelist) {
        fs.readFile(`data/${query