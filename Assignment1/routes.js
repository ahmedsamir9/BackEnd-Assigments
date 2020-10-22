const routes = (req , res)=>{
const url = req.url
console.log(url)
if(url === '/'){
    //res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write(
        '<body><form action="/userMessage" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
    res.write('</html>');
   res.end();
}
if(url === '/users'){res.write('<html>');
res.write('<head><title>Users Page</title><head>');
res.write('<body><ol><li>user1</li><li>user2</li></ol></body>');
res.write('</html>');
res.end();}
if(url === '/userMessage'){
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end',()=>{
          const parsedBody = Buffer.concat(body).toString();
          const messageFromBody = parsedBody.split('=')[1];
          console.log(messageFromBody)
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
}

}
exports.routes =routes;