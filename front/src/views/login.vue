<template>
  <div class="login-contain">
    <NavBar></NavBar>
    <img
      class="login-background"
      src="../assets/techlogin/images/报名背景.png"
      alt="背景"
    />
    <router-link to="/login/loginform" />
    <router-link to="/login/contact" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "../components/common/nav.vue";
export default {
  name: "Login",
  data() {
    return {
      LoginShow: false,
    };
  },

  components: {
    NavBar,
  },
};
</script>

<style>
.login-background {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -100;
}
@media screen and (max-width: 500px) {
  .login-contain {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .login-background {
    height: 850px;
  }
}
</style>