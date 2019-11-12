  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
     var ctx = canvas.getContext('2d');
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    //тінь каплі
    ctx.shadowBlur=10;
	ctx.shadowOffsetX=20;
	ctx.shadowOffsetY=20;
	ctx.shadowColor="#87CEEB";
 
	// малюєм каплю
	ctx.clearRect(0, 0, canvas.width,canvas.height);
    ctx.lineCap = 'round';
    ctx.beginPath();  
    //проти часової стрілки
    ctx.arc(75,75,35,0,Math.PI,false);  
    ctx.moveTo(110,75);
    ctx.quadraticCurveTo(109,45,85,1);
    ctx.quadraticCurveTo(41,30,40,75);
    ctx.lineWidth = "3";
    ctx.strokeStyle = "white";
    ctx.closePath();
    ctx.stroke();
    
    // Create gradient
	var grd = ctx.createRadialGradient(75, 80, 0, 80, 45, 90);
	grd.addColorStop(0, "white");
	grd.addColorStop(1, "blue");
	// заливаєм Fill with gradient
	ctx.fillStyle = grd;
	ctx.fill();
	}

