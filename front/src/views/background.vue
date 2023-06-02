<template>
  <div>
    <NavBar></NavBar>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <div class="big-background">
      <div class="background">
        <div class="shepi">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        <transition mode="out-in">
          <div v-if="show">
            <div class="center-content">
              <h1 class="head1">宏奕工作室（Homyit Studio）</h1>
              <p class="lead1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宏奕工作室成立于2013年9月，是在江西师范大学计算机信息工程学院各领导、老师的大力支持下迅速成长起来的学生自主研发的工作室。该工作室致力于Web开发，以社团的模式传承，在12级创始人王宏凯及十余名长老员共同努力下本着“有爱同行，踏实求新”的侠客情怀，致力于为学生提供一个专业的Web开发修炼圣地,培养出更多就业型人才。
              </P>
              <button class="btn" @click="handleClick">FLIP</button>
            </div>
          </div>
          <div v-else>
            <div class="center-content">
              <p class="lead2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              工作室在专业上，主要有开办技术培训、参加专业竞赛、开发团队产品等业务。就业质量上，不少工作室的前辈们已成功斩获百度、阿里、腾讯和字节跳动等互联网龙头企业的offer，创立至今，宏奕早已成为学院就业质量最高的团队!娱乐方面,工作室偶尔会进行聚餐，唱K等。工作室内还有免费空调、冰箱，让你在炎炎夏日有个避暑的好去处！
              </P>
              <div class="back-two-head">
                <h2 class="head2">快来加入我们吧!</h2>
                <div class="back-head-box" @click="toJoin">
                  <h2 class="animate__animated animate__bounce">JOIN US</h2>
                </div>
              </div>
              <button class="btn" @click="handleClick">FLIP</button>
            </div>
          </div>
        </transition>
          </div>
        <div class="left-star">
          <img src="../assets/background/star.png">
        </div>
        <div class="right-ast">
          <img src="../assets/background/ast.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavBar from '../components/common/nav.vue'
  import 'animate.css'
export default {
    name:'background',
    data(){
      return{
        show:true
      }
    },
    components : {
      NavBar
    },
    methods:{
      handleClick(){
        this.show=!this.show
      },
      toJoin(){
        this.$router.push({
          path : '/login/loginform'
        })
      }
    }
}
</script>

<style>
.big-background{
  background: url('../assets/background/background.png') no-repeat center center/cover;
  height: 100vh;
  color: white;
  position: relative;
}
 .big-background .background{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 2rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    
.left-star{
  width: 14vw;
  position: absolute;
  left: 8vw;
  top: 12vh;
}
.left-star img{
  width: 14vw;
  animation: rotation 3s infinite ease-in-out;
}

/* 星球动画 */
@keyframes rotation{
         0%{
           transform: rotate(-20deg);
         }50%{
           transform: rotate(20deg);
         }
         100%{
           transform: rotate(-20deg);
         }
     }

     
.right-ast{
  width: 20vw;
  position: absolute;
  right: 6vw;
  bottom: 22vh;
}
.right-ast img{
  width: 10vw;
}


/* 按钮动画 */
.v-enter-from{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition: opacity 1s;
}
.v-enter-to,
.v-leave-from{
  opacity: 1;
}
v-leave-to{
  opacity: 0;
}


.center-content{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40rem;
    height: 26rem;
    padding-bottom: 2.5vh;
    color: #fff;
    z-index: 100;
  }
  .center-content::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40rem;
    height: 100%;
    background: #fff;
    /* border-radius: 5px; */
    opacity: 0.3;
    z-index: -10;
  }
  .head1{
    color: #65dff5;
    font-size: 2rem;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  .lead1{
    font-size: 1.1rem;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    margin-bottom: 3rem;
    width: 80%;
    letter-spacing: 0.2rem;
    text-shadow: 1px 1px 2px #000;
  }
  .head2{
    color: #65dff5;
    font-size: 2rem;
  }
  .lead2{
    margin-bottom: 2vh;
    font-size: 1.1rem;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 80%;
    letter-spacing: 0.2rem;
    text-shadow: 1px 1px 2px #000;
  }
  .btn{
    width: 6rem;
    font-size: 1.5rem;
    background-color: #fff;
    color:#000;
    border: 1px solid #65dff5;
    border-radius: 5%;
    position: absolute;
    top: 22.5rem;
  }
  .btn:hover{
    background-color: #65dff5;
    opacity: 1;
  }

  .back-two-head{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }
  .back-head-box{
    padding: 0.2rem;
    background-color: #65dff5;
    color: #fff;
    border-radius: 2rem;
  }
   .shepi{
     position: relative;
     overflow: hidden;
   }
  .shepi:hover  span:nth-child(1){
  animation: animate1 3s linear infinite;
  display: block
}
  .shepi:hover span:nth-child(2){
  animation: animate2 3s linear infinite;
  animation-delay: 1.5s;
  display: block
}
  .shepi:hover span:nth-child(3){
  animation: animate3 3s linear infinite;
  display: block
}
  .shepi:hover span:nth-child(4){
  animation: animate4 3s linear infinite;
  animation-delay: 1.5s;
  display: block
}
  .shepi span:nth-child(1){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right,transparent,silver);
    display: none;
  }
  .shepi span:nth-child(2){
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom,transparent,silver);
    display: none;
  }   
  .shepi span:nth-child(3){
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to left,transparent,silver);
    display: none;
  }  
  .shepi span:nth-child(4){
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(to top,transparent,silver);
    display: none;
  }

@keyframes animate1 {
            0%{
                transform: translateX(-100%);
            }
            100%{
                transform:translateX(100%)
            }
        }
        @keyframes animate2 {
            0%{
                transform: translateY(-100%);
            }
            100%{
                transform:translateY(100%)
            }
        }
        @keyframes animate3 {
            0%{
                transform: translateX(100%);
            }
            100%{
                transform:translateX(-100%)
            }
        }
        @keyframes animate4 {
            0%{
                transform: translateY(100%);
            }
            100%{
                transform:translateY(-100%)
            }
        }
        @keyframes homebutton {
          0%{
            background-color: white;
          }
          100%{
            background-color: #65dff5 ;
          }
        }


   @media screen and (max-width : 500px){

      .left-star{
        top: 10vh;
      }
      .background .center-content::after{
        width: 80vw;
        padding: 0;
        height: 100%;
        bottom: 0;
      }
      .left-star img{
        width: 5rem;
      }
      .right-ast img{
        width: 4rem;
      }
       .background .center-content{
         width: 80vw;
         height: 19rem;
         padding-bottom: 0;
         bottom: 0;
         padding: 1rem;
       }
       .head1{
         font-size: 1.2rem;
         margin-top: 0;
         padding-top: 0;
         margin-top: 1vh;
         margin-bottom: 1vh;
         /* text-align: center; */
       }
       .lead1{
         font-size: 0.8rem;
         margin-left: 0;
         margin-right: 0;
         margin-bottom: 2vh;
         width: 100%;
         letter-spacing: 0.2rem;
       }
       .head2{
         font-size: 1.2rem;
       }
       .lead2{
         font-size: 0.8rem;
         margin-left: 0;
         margin-right: 0;
         margin-top: 0.5rem;
         margin-bottom: 0.2rem;
         width: 100%;
         letter-spacing: 0.2rem;
       }
       .btn{
         width: 5rem;
         height: 1.3rem;
         font-size: 1rem;
         top: 17.5rem;
       }
       .back-head-box h2{
         font-size: 1rem;
       }
       .shepi{
         height: 19rem;
         bottom: 3rem;
       }
   }
    @media screen and (min-width : 1500px){
      .background .lead1,
      .background .lead2{
        font-size: 1.3rem;
        width: 90%;
      }
    }
</style>