<template>
  <div class="photos-back">
    <h1>PHOTO STORY</h1>
    <div class="photo-content">
      <div class="photo-content-img">
        <img
          src="../assets/techlogin/images/南墙.png"
          class="photo-animate-one our-photo"
          @click="changephoto(0)"
        />
        <h2 class="active-photo">南墙初创</h2>
        <p>
          在12级创始人王宏凯及十余名长老成员共同努力下，宏奕工作室（HomyitStudio）于2013年9月成立了！创立者们带着对“有爱同行，踏实求新”的团队精神的追求，设计南墙，引领宏奕人开拓创新、不断进取。
        </p>
      </div>
      <div class="photo-content-img">
        <img
          src="../assets/techlogin/images/新生培训.png"
          class="our-photo"
          @click="changephoto(1)"
        />
        <h2>新生培训</h2>
        <p>
          初来乍到，你们肯定很多人都对这一切都很陌生，觉得自己零基础，肯定学不会。不用担心，20级学长学姐将会对21级新生集中开展培训工作，就算是零基础也可以学的好的噢！有基础的也可以更上一层楼哟！
        </p>
      </div>
      <div class="photo-content-img">
        <img
          src="../assets/techlogin/images/奖状台.jpg"
          class="our-photo"
          @click="changephoto(2)"
        />
        <h2>奖状台</h2>
        <p>
          从2013年9月工作室成立至今，我们的工作室成就也不少噢，江西省计算机作品赛、中国计算机设计大赛、软件服务外包等比赛我们都荣获名次。现如今，我们的学长学姐们更是遍布各大知名互联网公司！
        </p>
      </div>
      <div class="photo-content-img">
        <img
          src="../assets/techlogin/images/工作环境.png"
          class="our-photo"
          @click="changephoto(3)"
        />
        <h2>工作环境</h2>
        <p>
          工作室致力于打造舒适温馨的学习环境，24h空调、饮用水不间断供应，内设冰箱等实用设备，为成员解决自习室短缺等问题，营造踏实努力的学习氛围。在这里，你有志同道合的好伙伴陪你一起学习，有什么问题也可以询问学长学姐！
        </p>
      </div>
      <div class="photo-content-img">
        <img
          src="../assets/techlogin/images/2020.jpg"
          class="our-photo"
          @click="changephoto(4)"
        />
        <h2>新成员欢迎会</h2>
        <p>
          在你们经过多次培训，考核后，你们将正式加入宏奕这个大家庭，也许跟你同期的小伙伴你原来都不认识，但是当你们通过一起干饭，一起踏着风走回宿舍等方式熟悉起来后，这群原来不认识的人将会在宏奕一起追梦青春。
        </p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2021.png" class="our-photo"  @click="phototojoin()" />
        <h2>2021</h2>
        <p>期待你们的到来，快来报名吧</p>
      </div>
    </div>
  </div>
</template>

<script>
// 图片懒加载

let photobefore = 0;
export default {
  name: "photo",
  // created(){
  //   this.photodata = {
  //     photoimages : null
  //   }
  // },
  // mounted(){
  //   window.addEventListener('scroll', this.photoscroll);
  //   this.photoimages = document.getElementsByClassName('our-photo');
  // },
  methods: {
    // photoscroll(){
    //   console.log(this.photoimages);
    //   this.photoimages.forEach(photoimage => {
    //     let photoimagetop = photoimage.getBoundingClientRect().top;
    //     if(photoimagetop < window.innerHeight){
    //       let photodatasrc = photoimage.getAttribute('data-src');
    //       photoimage.setAttribute('src', photodatasrc);
    //       console.log(photoimage.getAttribute('src'))
    //     }
    //   })
    // },
    changephoto(value) {
      let ourphoto = document.getElementsByClassName("our-photo");
      let photoh2 = document.getElementsByTagName("h2");
      photoh2[0].style.color = "#fff";
      photoh2[photobefore].style.color = "#fff";
      photoh2[value].style.color = "#65dff5";
      ourphoto[0].classList.remove("photo-animate-one");
      ourphoto[photobefore].classList.remove("photo-animate-one");
      ourphoto[value].classList.add("photo-animate-one");
      photobefore = value;
    },
    phototojoin() {
      this.$router.push({
        path: "/login/loginform",
      });
    },
  },
};
</script>

<style>
.photos-back {
  width: 100vw;
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #65dff5;
}
.photo-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 2rem;
}
.photo-content-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 27rem;
  margin-top: 2rem;
  color: #fff;
}
.photo-content-img .active-photo {
  color: #65dff5;
}
.photo-content-img h2 {
  margin-top: 1rem;
}
.photo-content-img p {
  text-indent: 2rem;
  text-shadow: 1px 1px 3px #000;
  letter-spacing: 0.1rem;
  margin-top: 0.5rem;
}
.photo-content-img img {
  border: 8px solid #fff;
  width: 26rem;
  height: 15rem;
  object-fit: cover;
}
.photo-content-img .photo-animate-one {
  border: 8px solid #65dff5;
  animation: photoone 2s infinite ease-in-out;
}
/* 动画 */
@keyframes photoone {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@media screen and (max-width: 800px) {
  .photo-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-content-img {
    width: 23rem;
  }
  .photo-content-img img {
    width: 22rem;
    height: 12rem;
  }
}
@media screen and (min-width: 1500px) {
  .photo-content-img {
    width: 35rem;
  }
  .photo-content-img img {
    width: 34rem;
    height: 20rem;
  }
}
</style>