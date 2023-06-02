<template>
  <div class="tech-contain">
    <NavBar></NavBar>
    <img class="tech-background" src="../assets/techlogin/images/背景.png" />
    <div class="tech-content">
      <div class="tech-box" @touchstart.passive="touchstartdeal">
        <ul class="tech-list">
          <li class="after-details">
            <div class="tech-after-text tech-text">
              <h1>后端</h1>
              <p>
                后端开发的重点在于算法设计、数据结构、后端开发通常也需要根据业务场景进行不同语言的选择，在具体的功能实现部分可以采用Java、Python或者PHP等编程语言来实现。我们主要以Java语言为主，感兴趣的可以咨询学长学姐哦，宏奕期待你的到来。
              </p>
            </div>
            <div class="tech-after-people">
              <img
                src="../assets/techlogin/images/宇航员1.png"
                class="tech-people"
              />
            </div>
          </li>
          <li class="before-details">
            <div class="tech-before-people">
              <img
                src="../assets/techlogin/images/宇航员2_03.png"
                class="tech-people"
              />
            </div>
            <div class="tech-before-text tech-text">
              <h1>前端</h1>
              <p>
                前端即网站前台部分，主要使用HTML、CSS、JavaScript等专业技能和工具将产品UI设计稿实现成网站产品，涵盖用户PC端、移动端网页处理视觉和交互问题。前端工程师也是互联网时代软件产品研发中不可缺少的一种专业研发角色,快来宏奕学习前端吧。
              </p>
            </div>
          </li>
          <li class="ui-details">
            <div class="tech-ui-text tech-text">
              <h1>UI</h1>
              <p>
                UI负责软件界面的美术设计、创意工作和制作工作；根据各种相关软件的用户群，提出构思新颖有高度吸引力的创意设计；对软件人机交互、操作逻辑、界面美观进行整体设计。UI设计可以让软件变得有个性有品味。加入宏奕,让我们一起设计出奇妙又美观的页面吧。
              </p>
            </div>
            <div class="tech-ui-people">
              <img
                src="../assets/techlogin/images/宇航员3_03.png"
                class="tech-people"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="tech-slide">
        <img src="../assets/techlogin/images/滑动.png" />
      </div>
      <ul class="tech-select-list">
        <li
          class="tech-select-circle tech-select-active"
          @click="scroll(0)"
        ></li>
        <li class="tech-select-circle" @click="scroll(1)"></li>
        <li class="tech-select-circle" @click="scroll(2)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/common/nav.vue";
let before = 0;
let after = 0;
let techtime = null;
let touchvalue = 0;

//禁止下拉刷新
//   document.body.addEventListener('touchmove', function(e){
//       e.preventDefault();
//   }, {passive : false})
export default {
  name: "Technique",
  data() {
    return {
      techmove: 40,
    };
  },
  components: {
    NavBar,
  },
  //挂载变量以便对象使用
  created() {
    this.touchdata = {
      touchstartX: null,
      touchstartY: null,
      touchmoveX: null,
      touchmoveY: null,
      touchscrollX: null,
      touchscroolY: null,
      touchdirection: null,
    };
  },
  mounted() {
    // 重新进入此组件后 让after before为0
    before = 0;
    after = 0;
  },
  methods: {
    //轮播图制作
    scroll(value) {
      before = after;
      after = value;
      let techniqueul = document.getElementsByClassName("tech-list")[0];
      let techniquebox = document.getElementsByClassName("after-details")[0];
      let techniquewidth = techniquebox.offsetWidth;
      let techniqueli = document.getElementsByClassName("tech-select-circle");
      //根据屏幕大小调节移动距离
      if (techniquewidth >= 800) {
        this.techmove = 20;
      } else {
        this.techmove = 4;
      }

      //改变圆圈的样式
      techniqueli[before].classList.remove("tech-select-active");
      techniqueli[after].classList.add("tech-select-active");

      //控制内容的轮播
      clearInterval(techtime);
      techtime = setInterval(() => {
        if (after > before) {
          if (
            techniqueul.offsetLeft <=
            -techniquewidth * value + this.techmove
          ) {
            clearInterval(techtime);
          }
          techniqueul.style.left =
            techniqueul.offsetLeft - this.techmove + "px";
        } else if (before == after) {
          techniqueul.style.left = -techniquebox.offsetWidth * value + "px";
          clearInterval(techtime);
        } else {
          if (
            techniqueul.offsetLeft >=
            -techniquewidth * value - this.techmove
          ) {
            clearInterval(techtime);
          }
          techniqueul.style.left =
            techniqueul.offsetLeft + this.techmove + "px";
        }
      }, 3);

      //屏幕缩放
      window.onresize = function () {
        let techniquewidth = techniquebox.offsetWidth;
        techniqueul.style.left = -techniquewidth * value + "px";
        if (techniquewidth >= 800) {
          this.techmove = 20;
        } else {
          this.techmove = 4;
        }
      };
    },
    //移动端手指滑动效果制作
    touchstartdeal(e) {
      let techniqueul = document.getElementsByClassName("tech-list")[0];
      let techniquecontain = document.getElementsByClassName("tech-contain")[0];
      techniquecontain.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
      //啥叫第一个touches?
      let touchstart = e.targetTouches[0];
      this.touchstartX = touchstart.clientX;
      this.touchstartY = touchstart.clientY;
      //监听touchmove touchend
      techniqueul.addEventListener("touchmove", this.touchmovedeal, false);
      techniqueul.addEventListener("touchend", this.touchenddeal, false);
    },
    touchmovedeal(event) {
      //当屏幕有多个touch或者页面被缩放过，就不执行move操作
      let techniquebox = document.getElementsByClassName("after-details")[0];
      let techniquewidth = techniquebox.offsetWidth;
      if (event.targetTouches.length > 1 || (event.scale && event.scale !== 1))
        return;
      let techniqueul = document.getElementsByClassName("tech-list")[0];
      let touchmove = event.targetTouches[0];
      this.touchmoveX = touchmove.clientX;
      this.touchmoveY = touchmove.clientY;
      this.touchscrollX = this.touchmoveX - this.touchstartX;
      this.touchscrollY = this.touchmoveY - this.touchstartY;
      this.touchdirection =
        Math.abs(this.touchscrollX) > Math.abs(this.touchscrollY) ? 1 : 0;
      //竖滑阻止默认事件
      //需要判断是否事件可以被取消
      if (this.touchdirection == 0 && event.cancelable) {
        event.preventDefault();
        techniqueul.style.left = -techniquewidth * touchvalue + "px";
        //默认事件是滚动
      }
      techniqueul.style.left =
        techniqueul.offsetLeft + this.touchscrollX + "px";
    },
    touchenddeal() {
      let techniqueul = document.getElementsByClassName("tech-list")[0];
      let techniquebox = document.getElementsByClassName("after-details")[0];
      let techniquewidth = techniquebox.offsetWidth;
      let techniqueli = document.getElementsByClassName("tech-select-circle");
      if (this.touchscrollX < 0) {
        //小于20滑动
        if (this.touchscrollX < -30) {
          //touchvalue值改变之前，移除前一个圈圈的样式，同步before
          touchvalue = after;
          techniqueli[touchvalue].classList.remove("tech-select-active");
          before = touchvalue;
          touchvalue++;
          techniqueul.style.left = -techniquewidth * touchvalue + "px";
          if (touchvalue > 2) {
            touchvalue = 0;
            techniqueul.style.left = -techniquewidth * touchvalue + "px";
          }
          techniqueli[touchvalue].classList.add("tech-select-active");
          //同步网页端小圆圈和轮播
          after = touchvalue;
          techniqueli[before].classList.remove("tech-select-active");
          techniqueli[after].classList.add("tech-select-active");
          window.onresize = function () {
            let techniquewidth = techniquebox.offsetWidth;
            techniqueul.style.left = -techniquewidth * after + "px";
          };
          //清除数据残留
          this.touchscrollX = 0;
        } else {
          techniqueul.style.left = -techniquewidth * touchvalue + "px";
        }
      }
      if (this.touchscrollX > 0) {
        //大于20滑动
        if (this.touchscrollX > 30) {
          //点完后滑动后 touch value before同步
          touchvalue = after;
          techniqueli[touchvalue].classList.remove("tech-select-active");
          before = touchvalue;
          touchvalue--;
          techniqueul.style.left = -techniquewidth * touchvalue + "px";
          if (touchvalue < 0) {
            touchvalue = 2;
            techniqueul.style.left = -techniquewidth * touchvalue + "px";
          }
          techniqueli[touchvalue].classList.add("tech-select-active");
          //after与圆圈样式 移动位置同步
          after = touchvalue;
          techniqueli[before].classList.remove("tech-select-active");
          techniqueli[after].classList.add("tech-select-active");
          window.onresize = function () {
            let techniquewidth = techniquebox.offsetWidth;
            techniqueul.style.left = -techniquewidth * after + "px";
          };
          //清除数据残留
          this.touchscrollX = 0;
        } else {
          techniqueul.style.left = -techniquewidth * touchvalue + "px";
        }
        //取消监听 放在其他页面滑动造成连动效果
        techniqueul.removeEventListener("touchmove", this.touchmovedeal, false);
        techniqueul.removeEventListener("touchend", this.touchenddeal, false);
      }
    },
  },
};
</script>

<style>
/* 背景设置 */
.tech-contain .tech-background {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: -100;
}

.tech-contain .tech-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  touch-action: none;
  /* 系统默认菜单被禁用 */
}

/* 介绍部分 */
/* 没有这个盒子包裹 怎么ul回跑呢 */
.tech-box {
  position: relative;
  width: 100vw;
  height: 32rem;
  overflow: hidden;
  top: 2vh;
  touch-action: none;
}
.tech-slide {
  position: absolute;
  bottom: 25vh;
  right: 0;
  display: none;
}
.tech-content .tech-list {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 350rem;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 字体统一设置 */
.tech-list h1 {
  text-align: center;
  color: #65dff5;
}
.tech-list p {
  padding-top: 1.5rem;
  text-indent: 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  text-shadow: 1px 1px 2px #000;
}

/* 移动端响应式 */

@media screen and (max-width: 800px) {
  .tech-box {
    top: 8vh;
  }
  .after-details,
  .before-details,
  .ui-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  .tech-list p {
    font-size: 0.9rem;
  }
  .tech-box .tech-list .tech-people {
    width: 10rem;
  }
  .tech-contain .tech-content .tech-select-list {
    position: absolute;
    bottom: 20vh;
  }
  .tech-slide {
    display: block;
  }
}

/* 后端部分 */

.tech-list .after-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100%;
}
.after-details .tech-after-text {
  width: 23rem;
  /* background-color: green; */
}
.after-details .tech-after-people img {
  width: 15rem;
  animation: animate 2s infinite ease-in-out;
}

/* 前端部分 */
.tech-list .before-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100%;
}
.before-details .tech-before-text {
  width: 23rem;
  /* background-color: green; */
}
.before-details .tech-before-people img {
  width: 15rem;
  animation: animate 2s infinite ease-in-out;
}

/* ui部分 */
.tech-list .ui-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100%;
}
.ui-details .tech-ui-text {
  width: 23rem;
  /* background-color: green; */
}
.ui-details .tech-ui-people img {
  width: 15rem;
  animation: animate 2s infinite ease-in-out;
}

/* 动画效果 */

@keyframes animate {
  0% {
    transform: translateY(1rem);
  }
  50% {
    transform: translateY(-1.1rem);
  }
  100% {
    transform: translateY(1rem);
  }
}
/* 小圈圈 */
.tech-content .tech-select-list {
  position: absolute;
  bottom: 27vh;
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
/* 当屏幕大于1500px时 */
@media screen and (min-width: 1300px) {
  .tech-box {
    top: 15vh;
  }
  .tech-box .tech-text {
    width: 32rem;
  }
  .tech-list p {
    font-size: 1.5rem;
  }
  .tech-box .tech-list .tech-people {
    width: 20rem;
  }
  .tech-select-list .tech-select-circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #8da7a9;
  }
  .tech-select-list .tech-select-active {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background-color: #65dff5;
    border: 1px solid #8da7a9;
  }
}
.tech-select-circle {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #8da7a9;
}
.tech-select-active {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #65dff5;
  border: 1px solid #8da7a9;
}

/* 改变placeholder的颜色 */

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgb(156, 154, 154);
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgb(156, 154, 154);
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgb(156, 154, 154);
}
</style>
