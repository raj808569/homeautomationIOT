var gpio= require("gpio");
var express= require('express');
var app=express();
var http= require('http').Server(app);
var io= require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.set('port',(process.env.PORT||3000));
http.listen(app.get('port'),function(){
  console.log("listening to port number"+app.get('port'));
});
var off1,off2;
var pyshell=require('python-shell');
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {

//light1onoff code
				
socket.on('light1',function(data){ console.log('working');
                                  
                                
				pyshell.run('a.py',function(err){
						if(err) throw err;
					});
				

                                });
				
socket.on('light1off',function(data){console.log('off');
				
				pyshell.run('b.py',function(err){
						if(err) throw err;
					});
					
					});

//fan1onoff code

socket.on('fan1',function(data){ console.log('working');
                 
                               pyshell.run('e.py',function(err){
						if(err) throw err;
					});
				
				

                                });

   socket.on('fan1off',function(data){console.log('off');
			pyshell.run('f.py',function(err){
						if(err) throw err;
					});
									
                     		
					});

//light2onoff code

socket.on('light2',function(data){ console.log('working');
                 
                               pyshell.run('c.py',function(err){
						if(err) throw err;
					});
				
				

                                });

   socket.on('light2off',function(data){console.log('off');
			pyshell.run('d.py',function(err){
						if(err) throw err;
					});
									
                     		
					});
                                              });

