//LINK DO VIDEO: https://youtu.be/0EBPK6rKQww
var tela=1;
var digit='';
var digit2= ''
let img;
let educador;
let eu;
let figuras1
var pontos=0
function keyPressed(){
      digit=digit+key
      if(keyCode==ENTER || keyCode==BACKSPACE){
        digit=''
      }  
    }
function preload(){
  img=loadImage('bg1.jpg');
  eu=loadImage('eu2020.6.jpg')
  educador=loadImage('educador.jpeg')
  figuras1=loadImage('figuras frac.png')
  
}
function setup() {
  createCanvas(500, 500);
}
function draw() {
  textStyle(NORMAL);
  //tela inicial
  if(tela==1){        
    background(img);   
    text("Jogo das frações", 230,80);
    fill('#458B00');
    rect(65,205, 330, 40);
    rect(65,265, 330, 40);
    rect(65,330, 330, 40);    
    //botão de iniciar
    textAlign(CENTER)
    textSize(26) 
    fill(10)
    noStroke()     
    text("aperte 'ENTER' para Jogar",230,233)              
    fill(10)
    noStroke()
    text("aperte 'i' para Informações",234, 293)       
    fill(10)
    noStroke()
    text("aperte 'c' para Créditos",235, 355)
    fill(10)    
    if(key=='i'){
      tela=2
    }
    if(keyCode==ENTER){
      tela=3
    }
    if(key=='c'){
      tela=4
    }      
    }
  //tela das informações
  if(tela==2){
      background('#458B00');
      text("Informações", 230,80)
    fill(220)
      textSize(18)
      text("Jogo baseado na habilidade EF0MA05: Quinto ano." + "\n"  , 220,110)
      text("comparar e ordenar números racionais positivos,",205,130)
      text("relacionando-os a pontos na reta numérica.",185, 150)
      text("O jogador deve comparar pontos em reta com frações,",230,190)
      text("figuras com frações e fazer comparação de frações.",215, 210)
      textAlign(CENTER)
      textSize(26)
      text("v para voltar", 400,450)
      if(key=='v'){
        tela=1
      }
    }
  //jogo em ação
  if(tela==3){
    background('#458B00');
    text("Pontos: "+pontos, 70,470)
    text("Qual fração é maior?",230,80)
    text("1/5", 220,150)
    text("1/9", 150,150)  
    text("1/2", 290,150) 
    text("Digite sua resposta: "+digit,250,250)
    text("fase 1", 440, 470)
    if(digit==="1/2" ){     
      text("Acertou!", 300,300)
      text("aperte 'g'para próxima fase",260,350)
      pontos=1
    }  
      if(key=='g'){
        tela=5
        digit=''
      }   
  }  
    if(digit=="1/9" || digit=="1/5"|| digit=="1/3"|| digit=="1/4"|| digit=="1/6"|| digit=="1/7"|| digit=="1/8"){       
      background('#FF0000')
      text("Errou! :(",300,300)
        pontos=0
      text("aperte 'v' para voltar",140,400)
if(key==='v'){
        tela=1
}            
}
if(tela==5){
  background('#FF9900');
  text("Pontos: "+pontos, 70,470);
  text("Resposta: "+digit, 200, 375);
  image(figuras1, 100, 120)
  textSize(18)
  text("Pedro gostaria de dividir seu último biscoito ",200,50)
  text("com seus 4 amigos, qual representação abaixo ",215, 75)
  text("seria a maneira que ele deveria dividir?",180,100)
  text("fase 2", 440, 470)
  if(digit=='c'){
    text("Acertou!",210, 395)
    text("aperte 'h' para próxima fase",210,420)
    pontos=2  
  }
   if(key=='h'){
        tela=6
        digit=''
      }  
  if(digit=='a'|| digit=='b'){
    background('#FF0000')
    text("Errou! :(",300,300)
    pontos=1
    text("aperte 'v' para voltar",140,400)   
}
   if(key==='v'){
      tela=1
}      
}
if(tela==6){
  background('#00CCFF')
  textSize(20)
  text("Pontos: "+pontos, 70,470);
  text("Resposta: "+digit, 200, 375);
  text("fase 3", 440, 470)
  if(key==='v'){
      tela=1
}      
}    
  //créditos
  if(tela==4){
    background('#458B00')    
    text("Créditos",230,80)
    fill(220)
    textSize(18)
    text("v para voltar", 400,450)    
    text("Guilherme Bezerra Leibovitz, programador.", 200, 150)
    text("Aquiles Burlamaqui, Educador", 200, 350)
    image(eu, 100, 160, 100, 100)
    image(educador,110, 370, 100, 100)
      if(key=='v'){
        tela=1
      }
  }
}