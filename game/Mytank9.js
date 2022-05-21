var heroColor=new Array("green","#00B200");
var enemyColor=new Array("#FFFF00","#B2B200");

 
function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.isLive=true; 
	
	this.blood=22;
	
	this.bloodDown=function(){
		if(this.blood&gt;0){
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
		
	  
	  if(this.x&lt;=0||this.x&gt;=600||this.y&lt;=0||this.y&gt;=500){
		  
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
				    if(this.y&gt;0){
				      this.y-=this.speed;
					}
				   break;
				   case 1:
				   if(this.x&lt;540){
				    this.x+=this.speed;
				   }
				   break;
				   case 2:
				   if(this.y&lt;440){
				    this.y+=this.speed;
				   }
				   break;
				   case 3:
				   if(this.x&gt;0){
				    this.x-=this.speed;
				   }
				   break;   
			   }
			   
			   if(this.count&gt;=30){
			   this.direct=Math.round(Math.random()*3);
			   this.count=0;				   
			   }
			   this.count++;
			   
			   if(this.bulletIsLive==false&amp;&amp;this.isLive){
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
		
		for(var i=0;i<herobullets.length;i++){ var="" herobullet="heroBullets[i];" if(herobullet!="null&amp;&amp;heroBullet.isLive&amp;&amp;hero.isLive){" cxt.fillstyle="#02CC7B" ;="" cxt.fillrect(herobullet.x,herobullet.y,3,3);="" }="" function="" drawenemybullet(){="" for(="" i="0;i<enemyBullets.length;i++){" etbullet="enemyBullets[i];" if(etbullet.islive){="" cxt.fillrect(etbullet.x,etbullet.y,3,3);="" drawtank(tank){="" if(tank.islive){="" switch(tank.direct){="" case="" 0:="" 2:="" cxt.fillrect(tank.x,tank.y,9.5,60);="" cxt.fillrect(tank.x+30.5,tank.y,10,60);="" cxt.fillrect(tank.x+10,tank.y+10,20,40);="" cxt.arc(tank.x+20,tank.y+30,10,0,math.pi*2,true);="" cxt.fill();="" cxt.strokestyle="tank.color[0];" cxt.linewidth="2;" cxt.beginpath();="" cxt.moveto(tank.x+20,tank.y+30);="" if(tank.direct="=0){" cxt.lineto(tank.x+20,tank.y);="" }else="" cxt.lineto(tank.x+20,tank.y+60);="" cxt.closepath();="" cxt.stroke();="" break;="" 1:="" 3:="" cxt.fillrect(tank.x,tank.y,60,9.5);="" cxt.fillrect(tank.x,tank.y+30.5,60,10);="" cxt.fillrect(tank.x+10,tank.y+10,40,20);="" cxt.arc(tank.x+30,tank.y+20,10,0,math.pi*2,true);="" cxt.moveto(tank.x+30,tank.y+20);="" cxt.lineto(tank.x,tank.y+20);="" cxt.lineto(tank.x+60,tank.y+20);="" ishiteenemytank(){="" for(var="" herbullect="heroBullets[i];" if(herbullect.islive){="" j="0;j<enemyTanks.length;j++){" enemytank="enemyTanks[j];" if(enemytank.islive){="" switch(enemytank.direct){="" if(herbullect.x="">=enemyTank.x&amp;&amp;herBullect.x&lt;=enemyTank.x+40 &amp;&amp;herBullect.y&gt;=enemyTank.y &amp;&amp;herBullect.y&lt;=enemyTank.y+60){
							   herBullect.isLive=false;
							   enemyTank.isLive=false;
							   
							   var bomb=new Bomb(enemyTank.x,enemyTank.y);
							   
							   bombs.push(bomb);
							   enemyTanks.splice(j,1);  
						   }
						   break;
						   
						   case 1:
						   case 3:
						   if(herBullect.x&gt;=enemyTank.x&amp;&amp;herBullect.x&lt;=enemyTank.x+60 &amp;&amp;herBullect.y&gt;=enemyTank.y &amp;&amp;herBullect.y&lt;=enemyTank.y+40){
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
	for(var i=0;i<bombs.length;i++){ var="" bomb="bombs[i];" if(bomb.islive){="" img1="new" image();="" img1.src="blast8.gif" ;="" x="bomb.x;" y="bomb.y;" img1.onload="function(){" cxt.drawimage(img1,x,y,60,60);="" }="" bomb.blooddown();="" if(bomb.blood<="0){" bombs.splice(i,1);="" function="" ishitherotank(){="" for(var="" i="0;i<enemyTanks.length;i++){" enemytank="enemyTanks[i];" j="0;j<enemyBullets.length;j++){" enemybullet="enemyBullets[j];" if(enemybullet.islive){="" switch(hero.direct){="" case="" 0:="" 2:="" if(enemybullet.x="">=hero.x&amp;&amp;enemyBullet.x&lt;=hero.x+40 &amp;&amp;enemyBullet.y&gt;=hero.y &amp;&amp;enemyBullet.y&lt;=hero.y+60){
							   enemyBullet.isLive=false;
							   hero.isLive=false;
							   
							   var bomb=new Bomb(hero.x,hero.y);
							   
							   bombs.push(bomb);
						   }
					break;
					
					case 1:
					case 3:
					if(enemyBullet.x&gt;=hero.x&amp;&amp;enemyBullet.x&lt;=hero.x+60 &amp;&amp;enemyBullet.y&gt;=hero.y &amp;&amp;enemyBullet.y&lt;=hero.y+40){
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
   
   
   
   
   </bombs.length;i++){></herobullets.length;i++){>