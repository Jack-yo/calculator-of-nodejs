var http=require('http');
var querystring=require('querystring');
var url=require('url');
http.createServer(function(req,res){
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	  var postData='';
	  req.on('data',function(chunk){
	        postData+=chunk;
	  });
	  req.on('end',function(){
	         var c="";
			 var get=url.parse(req.url,true).query;
			 var post=querystring.parse(postData); 
			 res.write('<form method="post" action="?act=calculate">');
			 res.write('算式<input name="c" type="text" value="'+c+ '" />');
			 res.write('<input type="submit" value="计算" /></form>') ;
			 
			 if(get.act=="calculate"&&post.c){
			    c=post.c;
				
				res.write(c+"="+eval(c));   				
			}  
			
			
			 res.end();
			 
	  });
}).listen(3000);