<template>
  <div class="footer">
    <div class="footer-content-one">
      <p>
        ICP备案编号:<a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          >赣ICP备2021002498号-2</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  position: absolute;
  top: 92vh;
  display: flex;
  justify-content: center;
  width: 100vw;
  text-shadow: 1px 1px 4px #000;
}
.footer-content-one {
  color: #fff;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-content-one a {
  color: #fff;
  text-decoration: none;
}
</style>