<template>
  <div id="home-welcome">
    <h2 class="animate__animated animate__fadeInDown">
      Welcome To Our Studio!
    </h2>
    <h1 class="animate__animated animate__fadeInDown">Tt's nice to meet you</h1>
    <button
      id="home-btn"
      class="animate__animated animate__fadeInDown"
      @click="go()"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Fly to Homyit
    </button>
  </div>
</template>

<script>
export default {
  name: "home-welcome",
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push({
        path: "/background",
      });
    },
  },
};
</script>
<style>
#home-welcome {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
#home-welcome h2 {
  font-family: "方正舒体";
  font-size: 3rem;
}
#home-welcome h1 {
  font-family: "Sansita-Black";
  font-size: 4.7rem;
}
#home-btn {
  position: relative;
  margin: 10%;
  width: 35%;
  padding: 1%;
  color: #444343;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Adobe 黑体 Std";
  /* border-width: 0.05rem; */
  opacity: 0.6;
  border-radius: 5px;
}


#home-btn:hover {
  background-color: #65dff5;
  box-shadow: 0 0 10px 0 #65dff5;
  color: white;
}

@media screen and (max-width: 500px) {
  #home-welcome {
    text-align: center;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
  }
  #home-welcome h2 {
    font-size: 2rem;
  }
  #home-welcome h1 {
    font-size: 3rem;
  }
  #home-btn {
    margin: 15%;
    width: 50%;
    color: #444343;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Adobe 黑体 Std";
    opacity: 0.6;
    border-radius: 5px;
  }
}

</style>