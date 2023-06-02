<template>
    <div class='enter_contain'>
        <canvas id="Meteor" class="enter_canvas"></canvas>
        <canvas id="canvas" class="enter_canvas">你的浏览器不支持canvas</canvas>
          <div @click="change()" class="enter_button"></div>
          <img @click="change()" src="" alt="宇航员" style="z-index:1" class="enter_img">
    </div>
</template>

<script>
import canvas from '../assets/develop_js/enter_canvas.js'
export default {
    name:'enter',
    methods:{
      change(){
        // console.log(1)
        this.$router.push('/home')
      }
    },
    mounted(){
        let img = document.getElementsByTagName('img')
        // 画流星
        let elem = document.getElementById('Meteor')
        let div = document.getElementsByClassName('enter_contain')[0]
        // 画文字
        let txt=document.getElementById('canvas')
        canvas.enter_canvas(txt,elem,div,img)
}
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
   
    .enter_canvas{
        position: absolute;
        width: 100%;
        height: 100%;
        /* border: 3px solid red; */
    }
    .enter_contain{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items:flex-end;
        z-index: 1;
    }
    .star {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid #fff;
        animation: flash 2s infinite linear;
      }
      .star::before {
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid #fff;
      }
       .c_star{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid blue;
        animation: flash 2s infinite linear;
      }
      .c_star::before{
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid blue;
      }
      .d_star{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid rgb(163, 64, 138);
        animation: flash 2s infinite linear;
      }
      .d_star::before{
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid rgb(163, 64, 138);
      }
      @keyframes flash {
        20% {
          opacity: 0.2;
        }
        40% {
          opacity: 0.5;
        }
        60% {
          opacity: 1;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          opacity: 0.2;
        }
      }
      .enter_button{
        position: absolute;
        width: 5vw;
        height: 5vw;
        left: calc(50% - 2.5vw);
        top: calc(50% - 2.5vw);
        border-radius: 50%;
        border: 1px solid white;
        box-shadow: 0 0 10px 0 white;
        z-index: 1;
      }
      .enter_button::after{
        content: '';
        position: absolute;
        width: 2vw;
        height: 2vw;
        border-left: 0.2vw solid white;
        border-bottom: 0.2vw solid white;
        transform: rotate(-46deg);
        left: 1.3vw;
        top: 1vw;
      }
      .enter_button:hover {
        animation: EnterButton 1s ;
        animation-fill-mode: forwards;
      }
      @keyframes EnterButton{
        0%{
            /* box-shadow: 0 0 0 0 #9ddaec inset */
            background-color: transparent;
            /* 0 0 10 0 white ; */
            
        }
         100%{
            /* box-shadow: 0 0 0 3vw red inset */
            background-color: gray
            /* 0 0 10 0 white ; */
        }
      }
      @media only screen and (max-width: 800px) {
        .enter_button{
          width: 7vh;
          height: 7vh;
          top:40%
        }
        .enter_button::after{
          width: 3vh;
          height: 3vh;
          left: 1.7vh;
          top: 1vh;
        }
      }
</style>