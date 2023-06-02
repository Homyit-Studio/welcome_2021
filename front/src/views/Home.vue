<template>
  <div class="home">
    <NavBar></NavBar>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <img
      id="home-img"
      src="../assets/home/home-bg.jpg"
      alt=""
      width="100%"
      height="100%"
    />
    <img
      src="../assets/home/moon.png"
      alt=""
      width="80rem"
      height="80rem"
      id="home-moon"
    />

    <home-welcome></home-welcome>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeWelcome from "../components/home/home-welcome.vue";
import NavBar from "../components/common/nav.vue";
import Footer from "../components/common/footer.vue"

export default {
  name: "Home",
  components: {
    HomeWelcome,
    NavBar,
    Footer
  },
  date() {
    return {
      flag: false,
      screenWidth: "",
      screenHeight: "",
    };
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    if (this.screenWidth < 500) {
      // console.log(this.screenWidth);
      this.flag = true;
    }
  },
};
</script>
<style>
@font-face {
  font-family: Sansita-Black;
  src: url("../assets/home/font/Sansita-Black.otf");
}
.home {
  height: 100%;
  width: 100%;
  color: #ffff;
}
#home-img {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -100;
}
#home-moon {
  opacity: 0;
}
@media screen and (max-width: 500px) {
  #home-img {
    top: 0;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -100;
  }
  #home-moon {
    opacity: 1;
    position: absolute;
    top: 10%;
    right: 5%;
  }
}
</style>
