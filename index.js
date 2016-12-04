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
var Gpio = require('onoff').Gpio;
led=new Gpio(4,'out');
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {

//light1onoff code
				socket.on('light1off',function(data){console.log('off');
						{io.sockets.in(socket.id).emit('light1offdone',0);
                     		}
					});
socket.on('light1',function(data){ console.log('working');
                                   
                                   if(data==1)
				{io.sockets.in(socket.id).emit('light1done',1);
                     		}
				
				

                                });
				


//light2onoff code

socket.on('light2',function(data){ console.log('working');
                                   var Gpio = require('onoff').Gpio,
                                   led=new Gpio(3,'out');
                                   if(data==1)
				{io.sockets.in(socket.id).emit('light2done',1);
                     		}
				
				socket.on('light2off',function(data){console.log('off');
						{io.sockets.in(socket.id).emit('light2offdone',0);
                     		}
					});

                                });

   
                                              });

