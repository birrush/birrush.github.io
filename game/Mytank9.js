
var heroColor=new Array("green","#00B200");
var enemyColor=new Array("#FFFF00","#B2B200");

 
function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.isLive=true; 
	
	this.blood=22;
	
	this.bloodDown=function(){
		if(this.blood>0){
			this.blood-=2;
		}else{
			
			this.isLive=false;
		}
	}
} 


function Bullet(x,y,direct,speed,type,tank){
    this.x=x;
	this.y=y;
	this.direct=direct;	
	this.speed=speed;
	this.timer=null;
	this.isLive=true;
	this.type=type;
	this.tank=tank;	
	
	this.run=function run(){
		
	  
	  if(this.x<=0||this.x>=600||this.y<=0||this.y>=500){
		  
		  window.clearInterval(this.timer);
		  
		  this.isLive=false;
		  if(this.type=="enemy"){
			 this.tank.bulletIsLive=false;
		  }
	  }else{	  
      
	  switch(this.direct){
		 case 0:
		 this.y-=this.speed;
		 break;
		 case 1:
		 this.x+=this.speed;
		 break;
		 case 2:
		 this.y+=this.speed;
		 break;
		 case 3:
		 this.x-=this.speed;
		 break;
	  }
	 }
	
	}
}


function Tank(x,y,direct,color){
	this.x=x;
	this.y=y;
	this.speed=3;
	this.direct=direct;
	this.color=color;
	this.isLive=true;
	
	this.moveUp=function(){
	  this.y-=this.speed;
	  this.direct=0;
	}
	this.moveRight=function(){
	  this.x+=this.speed;
	  this.direct=1;
	}
	this.moveDown=function(){
	  this.y+=this.speed;
	  this.direct=2;
	}
	this.moveLeft=function(){
	  this.x-=this.speed;
	  this.direct=3;
	}
}    

   
   
   function Hero(x,y,direct,color){
	   
      this.tank=Tank;
	  this.tank(x,y,direct,color);
	  
	   
       this.shotEnemy=function(){
	   
	   
	   if(this.isLive){
	   switch(this.direct){
		   case 0:
		   heroBullet=new Bullet(this.x+19,this.y,this.direct,5,"hero",this);
		   break;
		   case 1:
		   heroBullet=new Bullet(this.x+60,this.y+19,this.direct,5,"hero",this);
		   break;
		   case 2:
		   heroBullet=new Bullet(this.x+19,this.y+60,this.direct,5,"hero",this);
		   break;
		   case 3:
		   heroBullet=new Bullet(this.x,this.y+19,this.direct,5,"hero",this);
		   break;
	      }
	   }
	   
	   heroBullets.push(heroBullet);
	   
	  var timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50)
      
	   heroBullets[heroBullets.length-1].timer=timer;  
   }
 }  
   
   
   
   
   function EnemTank(x,y,direct,color)
   {   
       
	   this.tank=Tank;
	   this.tank(x,y,direct,color);	
	   this.count=0;
	   this.bulletIsLive=true;  

       
       this.run=function run(){
		   if(this.isLive){
			   switch(this.direct){
				   case 0:
				    if(this.y>0){
				      this.y-=this.speed;
					}
				   break;
				   case 1:
				   if(this.x<540){
				    this.x+=this.speed;
				   }
				   break;
				   case 2:
				   if(this.y<440){
				    this.y+=this.speed;
				   }
				   break;
				   case 3:
				   if(this.x>0){
				    this.x-=this.speed;
				   }
				   break;   
			   }
			   
			   if(this.count>=30){
			   this.direct=Math.round(Math.random()*3);
			   this.count=0;				   
			   }
			   this.count++;
			   
			   if(this.bulletIsLive==false&&this.isLive){
				   switch(this.direct){
					   case 0:
					   etBullet=new Bullet(this.x+19,this.y,this.direct,5,"enemy",this);
					   break;
					   case 1:
					   etBullet=new Bullet(this.x+60,this.y+19,this.direct,5,"enemy",this);
					   break;
					   case 2:
					   etBullet=new Bullet(this.x+19,this.y+60,this.direct,5,"enemy",this);
					   break;
					   case 3:
					   etBullet=new Bullet(this.x,this.y+19,this.direct,5,"enemy",this);
					   break;
				   }
				   
			   
				enemyBullets.push(etBullet);
				
				var mytimer=window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()",50);
				enemyBullets[enemyBullets.length-1].timer=mytimer;

				this.bulletIsLive=true;
			   }
		   }
	   }
         	   
   } 
    
	
	
	function drawHeroBullet(){
		
		for(var i=0;i<heroBullets.length;i++){
			var heroBullet=heroBullets[i];  
		if(heroBullet!=null&&heroBullet.isLive&&hero.isLive){
	      cxt.fillStyle="#02CC7B";
          cxt.fillRect(heroBullet.x,heroBullet.y,3,3);
	     }  
	    }
	}
	
	
	function drawEnemyBullet(){
		
		for( var i=0;i<enemyBullets.length;i++){
			var etBullet=enemyBullets[i];
			
			if(etBullet.isLive){
				cxt.fillStyle="#FFFF00";
				cxt.fillRect(etBullet.x,etBullet.y,3,3);
			}
		}
	}
 
 
   
   function drawTank(tank){
   
   if(tank.isLive){
	switch(tank.direct){
		case 0:
		case 2:
		   cxt.fillStyle=tank.color[0];
		   
		   cxt.fillRect(tank.x,tank.y,9.5,60);   
		   cxt.fillRect(tank.x+30.5,tank.y,10,60);   
		   cxt.fillStyle=tank.color[1];  
		  cxt.fillRect(tank.x+10,tank.y+10,20,40);   
		   
		   cxt.fillStyle=tank.color[0];   
		   cxt.arc(tank.x+20,tank.y+30,10,0,Math.PI*2,true);
		   cxt.fill();   
		   
		   
		   cxt.strokeStyle=tank.color[0];
		   
		   cxt.lineWidth=2;
		   cxt.beginPath();
		   cxt.moveTo(tank.x+20,tank.y+30);
		     if(tank.direct==0){
		       cxt.lineTo(tank.x+20,tank.y);
			   }else if(tank.direct==2){
			   cxt.lineTo(tank.x+20,tank.y+60);
			   }
		   cxt.closePath();
		   cxt.stroke();
		   break;
      case 1:
	  case 3:
		   cxt.fillStyle=tank.color[0];
		   
		   cxt.fillRect(tank.x,tank.y,60,9.5);   
		   cxt.fillRect(tank.x,tank.y+30.5,60,10);   
		   cxt.fillStyle=tank.color[1];  
		  cxt.fillRect(tank.x+10,tank.y+10,40,20);   
		   
		   cxt.fillStyle=tank.color[0];   
		   cxt.arc(tank.x+30,tank.y+20,10,0,Math.PI*2,true);
		   cxt.fill();   
		   
		   
		   cxt.strokeStyle=tank.color[0];
		   
		   cxt.lineWidth=2;
		   cxt.beginPath();
		   cxt.moveTo(tank.x+30,tank.y+20);
		     if(tank.direct==3){
		       cxt.lineTo(tank.x,tank.y+20);
		   }else if(tank.direct==1){
		       cxt.lineTo(tank.x+60,tank.y+20);
		   }
		   cxt.closePath();
		   cxt.stroke();
		   break;
	  
      }
    }
   }  
   
   
 function isHitEenemyTank(){
	    
		for(var i=0;i<heroBullets.length;i++){
			
			var herBullect=heroBullets[i];
			
			if(herBullect.isLive){
				for(var j=0;j<enemyTanks.length;j++){
					
					var enemyTank=enemyTanks[j];				
					if(enemyTank.isLive){
						
					   switch(enemyTank.direct){
						   case 0:
						   case 2:
						   if(herBullect.x>=enemyTank.x&&herBullect.x<=enemyTank.x+40 &&herBullect.y>=enemyTank.y &&herBullect.y<=enemyTank.y+60){
							   herBullect.isLive=false;
							   enemyTank.isLive=false;
							   
							   var bomb=new Bomb(enemyTank.x,enemyTank.y);
							   
							   bombs.push(bomb);
							   enemyTanks.splice(j,1);  
						   }
						   break;
						   
						   case 1:
						   case 3:
						   if(herBullect.x>=enemyTank.x&&herBullect.x<=enemyTank.x+60 &&herBullect.y>=enemyTank.y &&herBullect.y<=enemyTank.y+40){
							   herBullect.isLive=false;
							   enemyTank.isLive=false;
							    
							    var bomb=new Bomb(enemyTank.x,enemyTank.y);
							    
							    bombs.push(bomb);
								enemyTanks.splice(j,1);
						   }
						   break;
					   }
					}
				}
				
			}
		}
 }
 

 
 

function drawEnemyBomb(){
	for(var i=0;i<bombs.length;i++){
		
		var bomb=bombs[i];
		if(bomb.isLive){
			
			
				var img1=new Image();
				img1.src="blast8.gif";
				var x=bomb.x;
				var y=bomb.y;
				img1.onload=function(){
					cxt.drawImage(img1,x,y,60,60);
			}

			
			bomb.bloodDown();
			if(bomb.blood<=0){
				
				bombs.splice(i,1);

			}
		}
	}
}  


function isHitHeroTank(){
	for(var i=0;i<enemyTanks.length;i++){
		var enemyTank=enemyTanks[i];
		for(var j=0;j<enemyBullets.length;j++){
			var enemyBullet=enemyBullets[j]; 
			if(enemyBullet.isLive){
				switch(hero.direct){
					case 0:
					case 2:
					if(enemyBullet.x>=hero.x&&enemyBullet.x<=hero.x+40 &&enemyBullet.y>=hero.y &&enemyBullet.y<=hero.y+60){
							   enemyBullet.isLive=false;
							   hero.isLive=false;
							   
							   var bomb=new Bomb(hero.x,hero.y);
							   
							   bombs.push(bomb);
						   }
					break;
					
					case 1:
					case 3:
					if(enemyBullet.x>=hero.x&&enemyBullet.x<=hero.x+60 &&enemyBullet.y>=hero.y &&enemyBullet.y<=hero.y+40){
							   enemyBullet.isLive=false;
							   hero.isLive=false;
							   
							   var bomb=new Bomb(hero.x,hero.y);
							   
							   bombs.push(bomb);
						   }
					break;
				}
			}
		}
	}

}

function FoundEnemyTank(length){
	this.i=length;
	
     var enemyTank=new EnemTank(70,70,Math.round(Math.random()*3),enemyColor);
     
	 enemyTanks[i]=enemyTank;
	 
	 window.setInterval("enemyTanks["+i+"].run()","50");	 
	 
	var eb=new Bullet(enemyTanks[i].x+19,enemyTanks[i].y+60,Math.round(Math.random()*3),5,"enemy",enemyTanks[i]);
	enemyBullets[i]=eb;
	
	var ettimer=window.setInterval("enemyBullets["+i+"].run()",50);
	enemyBullets[i].timer=ettimer;

}
   
   
   
   
   