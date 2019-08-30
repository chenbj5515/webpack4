const http = require('http');
const path = require('path')
const fs = require('fs'); // 引入文件读取模块

// var documentRoot = path.resolve(__dirname, '../interactive-student/z_student')
const documentRoot = path.resolve(__dirname, '../dist')


http.createServer((req, res) => {
  // 发送 HTTP 头部
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  // 发送响应数据 "Hello World"
  // response.end('Hello World\n');
  const file = documentRoot + req.url;
  // console.log(file, 'file===')
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHeader(404, {
        'content-type': 'text/html;charset="utf-8"',
      });
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end();
    } else {
      res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"',
      });
      res.write(data); // 将index.html显示在客户端
      res.end();
    }
  });
}).listen(8080);
// 终端打印如下信息
console.log('服务器开启成功');
