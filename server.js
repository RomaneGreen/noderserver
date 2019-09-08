
let http = require('http'); 
let fs = require('fs')
  
// Create a server object 
http.createServer(function (req, res) { 
      
    // http header 
    res.writeHead(200, {'Content-Type': 'text/html'});  
      
    let url = req.url; 
    if(url ==='/') { 

      fs.readFile('index.html', function(err, data) {
        res.write(data);
         res.end();  
      })
    } 
    else if(url ==='/about') { 

      fs.readFile('about.html', function(err, data) {
        res.write(data);
         res.end();  
      })
    } 
    else if(url ==='/contact-me') { 
      fs.readFile('contact-me.html', function(err, data) {
        res.write(data);
        return res.end(); 
      })
    } 
    else { 
      fs.readFile('404.html', function(err, data) {
        res.write(data);
        return res.end();
      })
    } 
}).listen(8080, function() { 
      
    // The server object listens on port 3000 
    console.log("server start at port 8080"); 
}); 
    