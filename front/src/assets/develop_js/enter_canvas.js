import yu_a from '../enter/宇航.png'
import yu_b from '../enter/enter_yu_p.png'
export default{
  enter_canvas(txt,elem,div,img){
    let listen = 0
    function homyit(txt){
      let elem = txt
      // 准备要用到的数据
      let ctx= elem.getContext('2d')
      let H = elem.clientHeight
      let W = elem.clientWidth
      let speed = 8
      let dotList=[]
      elem.width=W
      elem.height=H
      ctx. textBaseline="middle"
      ctx.textAlign = "center"
      // let fontSize = elem.width*2/15
      let fontSize
      if(W>800){fontSize=W*2/15}else{fontSize=W*3.6/15}
      let fontFamily='Helvetica Neue, Helvetica, Arial, sans-serif';
      // init初始化
      function init(){
          ctx.font = fontSize+"px "+fontFamily;
          ctx.fillStyle='red'
          ctx.fillText('HOMYIT',W/2,H/3)
          let imgData
          if(ctx.getImageData(0,0,W,H)){imgData = ctx.getImageData(0,0,W,H)}
          ctx.clearRect(0,0,W,H)
          let gap
          if (W>800){gap=5}else{gap=2}
          for(let x=0;x<imgData.width;x+=gap){
              for(let y=0;y<imgData.height;y+=gap){
                  let i = (y*imgData.width+x)*4;
                  //判断这个像素是不是红色
                  if (imgData.data[i] == 255 && imgData.data[i + 1] == 0 && imgData.data[i + 2] == 0 && imgData.data[i + 3] == 255) {
                  // Dot是下面写的构造函数,此时构造的nowX还是0
                  var dot = new Dot(x, y);
                  dotList.push(dot);
                  }
                          
              }
          }
         
          for(let i=0;i<dotList.length;i++){
              dotList[i]['nowX']=dotList[0]['x']
          }
          window.requestAnimationFrame(draw)
      }
      function Dot(cx,cy){
          this.x=cx
          this.y=cy
          this.nowX=0
      }   
      function draw(){
          let flag=true
          ctx.fillStyle='#fff'
          ctx.clearRect(0,0,W,H)
          for(let i = 0;i<dotList.length;i++){
              if(dotList[i]['x']>dotList[i]['nowX']){
                  dotList[i]['nowX']+=speed;
                  flag =false
              }else{
                  dotList[i]['nowX']=Math.floor(dotList[i]['x'])
              }
              ctx.beginPath();
              ctx.arc(dotList[i]['nowX'],dotList[i]['y'],3,0,2*Math.PI,false)
              ctx.fill()
          }
          if(flag){
              enddraw()
              return
          }
          window.requestAnimationFrame(draw)
      }
      function enddraw(){
          ctx.strokeStyle='#65dff5'
          ctx.lineWidth=4
          ctx.shadowBlur = 4;
          let p = 1
          if(elem.width<800){ctx.lineWidth=1;ctx.shadowBlur=1;p=0.1}
          ctx.shadowOffsetX = 1*p;
          ctx.shadowOffsetY = 1*p;
          ctx.shadowColor = '#09bad9';
          
          ctx.strokeText('HOMYIT',W/2,H/3)

          ctx.shadowOffsetX = -1*p;
          ctx.shadowOffsetY = -1*p;
          ctx.shadowColor = '#09bad9';
          ctx.strokeText('HOMYIT',W/2,H/3)

      }
      init()
  }
    function liuxing(elem,div){
    let starCount
    if(window.width>800){starCount=170}else{starCount=100}
    let context = elem.getContext("2d")
    elem.width=elem.clientWidth
    // console.log(elem.width)
    elem.height=elem.clientHeight
    // console.log(elem.height)
    function starInit(){
        for(var i = 0;i<starCount;i++){
            let star=document.createElement("div")
            star.classList.add("star")
            div.appendChild(star)
        }
    }
    function starPosition(){
        let stars = document.querySelectorAll(".star")
        for(let i = 0;i<starCount;i++){
            stars[i].style.left = Math.random() * (elem.width-30) + "px";
            stars[i].style.top = Math.random() * (elem.height-30) + "px";
            stars[i].style.animationDelay = Math.random() * 10 + "s";
        }
    }

    // 流星对象
    function MeteorRain(){
        this.x = Math.random() * elem.clientWidth+300;
        this.y = Math.random() * elem.clientHeight-300;
        this.length = Math.ceil(Math.random() * 80 + 150);
        this.angle = 30+parseInt(Math.random()*10);
        this.cos = Math.cos((this.angle * 3.14) / 180);
        this.sin = Math.sin((this.angle * 3.14) / 180);
        this.width = this.length * this.cos;
        this.height = this.length * this.sin;
        this.count=0
        this.speed = Math.random()
        if(this.speed>0.8){this.speed=4}else{
            this.speed=Math.ceil(Math.random()+0.5)
          }
        this.shifting_x = this.speed * this.cos;
        this.shifting_y = this.speed * this.sin;
        
        this.countPos = function () {
          this.x = this.x - this.shifting_x;
          this.y = this.y + this.shifting_y;
        };
  
        this.draw = function () {
          context.save();
          context.beginPath();
          context.lineWidth = 1;
          context.globalAlpha = this.alpha;
          let line = context.createLinearGradient(
            this.x,
            this.y,
            this.x + this.width,
            this.y - this.height
          );
          // 这里设置渐变
          // 56bbd4
          // 8fd6e0 46a0ae 2e64e0
          line.addColorStop(0, "#fff");
          line.addColorStop(0.1, "#fff");
          line.addColorStop(0.2,'#fff')
          line.addColorStop(1.0, "black");
          context.strokeStyle = line;
          context.moveTo(this.x, this.y);
          context.lineTo(this.x + this.width, this.y - this.height);
          context.closePath();
          context.stroke();
          context.restore();
        };
        this.move = function () {
          var x = this.x + this.width - this.shifting_x;
          var y = this.y - this.height + this.shifting_y;
          context.clearRect(
            x - 3,
            y - 3,
            this.shifting_x + 5,
            this.shifting_y + 5
          );
          this.countPos();
          this.alpha -= 0.002;
          this.draw();
        };
      }

      function playRains() {
          if(listen){
            listen=0
            // console.log('重新执行流星')
            return
          }
          for (let i=0;i<rainCount;i++){
              let rain = rains[i]
              rain.move()
              rain.count-=1
              if(rain.count>0){continue}
              if (rain.y > elem.height+100||rain.x<-elem.width) {
                context.clearRect(
                  rain.x,
                  rain.y - rain.height,
                  rain.width,
                  rain.height
                )
                rains[i] = new MeteorRain();
              }
          }
          window.requestAnimationFrame(playRains)
      }
      let rainCount=15
      let rains = new Array()
    //   init()
      starInit()
      starPosition()
      setTimeout(()=>{
          for(let i=0;i<rainCount;i++){
              var rain = new MeteorRain()
              rain.count-parseInt(Math.random()*800)
              rains.push(rain)
          }
          playRains()
      },2000)

}
    function theimg(img) {
      if(document.body.clientWidth>500){img[0].src=yu_a}
      else{img[0].src=yu_b}
      if(document.body.clientWidth>800){img[0].width = document.body.clientWidth/4}
      else{img[0].width=document.body.clientWidth;}
    }
    theimg(img)
    homyit(txt)
    liuxing(elem,div)
    window.onresize=()=>{{
      listen = 1
      homyit(txt)
      liuxing(elem,div)
      theimg(img)
    }}
  },
    changecolor(elem){
      for(let i=0;i<20;i++){
        let x = parseInt(Math.random()*160)
        if(elem[x]){elem[x].className='c_star'}
        // elem[x].className='c_star'
      }
      for(let i=0;i<10;i++){
        let x = parseInt(Math.random()*160)
        // console.log(star[x])
        if(elem[x]){elem[x].className='d_star'}
        // star[x].className='d_star'
      }  
    }
}