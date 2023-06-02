<template>
  <div class="login-contact">
    <img
      src="../../assets/techlogin/images/报名背景.png"
      class="login-contact-background"
    />
    <div class="login-contact-details">
      <div class="login-details-text">
        <h1>CONTACT US</h1>
        <p>宏奕迎新群</p>
      </div>
      <img src="../../assets/techlogin/images/二维码.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.login-contact {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-contact .login-contact-background {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: 100;
}
.login-contact .login-contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 200;
  height: 50%;
  margin-bottom: 10rem;
}
.login-contact-details .login-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-contact .login-contact-details h1 {
  color: #65dff5;
}
.login-contact-details p {
  color: #fff;
}
.login-contact .login-contact-details img {
  width: 15rem;
}
/* 层级要看权重？？？ */
@media screen and (min-width: 1300px) {
  .login-contact .login-contact-details img {
    width: 17rem;
}
  .login-contact .login-contact-details{
    margin-bottom: 12rem;
  }
}
</style>