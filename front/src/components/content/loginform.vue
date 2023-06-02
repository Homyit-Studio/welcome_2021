<template>
  <div class="login-content">
    <div class="login-join">
      <h1>JOIN HOMYIT</h1>
      <h2>加入宏奕</h2>
    </div>
    <form class="login-form" method="">
      <div class="login-main-form">
        <div class="login-input">
          <input
            type="text"
            class="login-form-name"
            placeholder="姓名"
            v-model="stuName"
            @blur="inputjudge(stuName, 0)"
          />
        </div>
        <div class="login-input">
          <input
            type="text"
            class="login-form-number"
            placeholder="学号"
            v-model="stuNum"
            @blur="inputjudge(stuNum, 1)"
          />
        </div>
        <div class="login-input">
          <input
            type="text"
            class="login-form-class"
            placeholder="班级"
            v-model="stuClass"
            @blur="inputjudge(stuClass, 2)"
          />
        </div>
        <div class="login-input">
          <input
            type="text"
            class="login-form-address"
            placeholder="qq邮箱"
            v-model="email"
            @blur="inputjudge(email, 3)"
          />
        </div>
        <textarea
          placeholder="你的自我介绍/意向"
          class="login-form-idea"
          v-model="introduce"
        ></textarea>
      </div>
      <div class="login-button" @click="logincommit()">
        <p>立即报名</p>
        <!-- <button @click="logincommit()">立即报名</button> -->
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import qs from 'qs'
export default {
  name: "Loginform",
  data() {
    return {
      stuName: "",
      stuNum: "",
      stuClass: "",
      email: "",
      introduce: "",
    };
  },
  methods: {
    logincommit() {
      if (
        this.stuName != "" &&
        this.stuClass != "" &&
        this.email != "" &&
        this.stuNum != ""
      ) {
        if (
          /^[\da-zA-Z]+@\w+\.\w+$/.test(this.email) &&
          /^\d{12}$/.test(this.stuNum)
        ) {
          axios
            .post("http://localhost:8080/api/register", {
              name: this.stuName,
              number: this.stuNum,
              classs: this.stuClass,
              mail: this.email,
              introduction: this.introduce,
            })
            .then((res) => {
              // console.log(res.data)
              if (
                res.data.msg == "success" ||
                res.data.msg == "此学号已经报名"
              ) {
                this.$store.commit("judge");
                alert(res.data.msg);
                this.$router.push({
                  path: "/login/contact",
                });
              } else {
                // 失败要执行的函数
                () => {
                  alert(res.data.msg);
                };
              }
            })
            .catch((err) => {
              // 失败要执行的函数
              () => {
                alert(err);
              };
              // console.log(123)
              // console.log(err.response);
            });
        } else {
          alert("学号/邮箱填写错误");
        }
        // console.log('成功执行logincommit')
      } else {
        alert("请将信息填写完整");
      }
    },
    inputjudge(value, id) {
      let logininput = document.getElementsByClassName("login-input")[id];
      if (value != "") {
        logininput.classList.remove("login-vaild");
        logininput.classList.add("login-finish");
        if (
          (id === 3 && !/^[\da-zA-Z]+@\w+\.\w+$/.test(value)) ||
          (id === 1 && !/^\d{12}$/.test(value))
        ) {
          logininput.classList.add("login-error");
        }
      } else {
        logininput.classList.remove("login-vaild");
        logininput.classList.add("login-error");
      }
    },
  },
  watch: {
    stuName: function () {
      let logininput = document.getElementsByClassName("login-input")[0];
      logininput.classList.remove("login-error");
      logininput.classList.remove("login-finish");
      logininput.classList.add("login-vaild");
    },
    stuNum: function () {
      let logininput = document.getElementsByClassName("login-input")[1];
      logininput.classList.remove("login-error");
      logininput.classList.remove("login-finish");
      logininput.classList.add("login-vaild");
    },
    stuClass: function () {
      let logininput = document.getElementsByClassName("login-input")[2];
      logininput.classList.remove("login-error");
      logininput.classList.remove("login-finish");
      logininput.classList.add("login-vaild");
      logininput.classList.add("login-vaild");
    },
    email: function () {
      let logininput = document.getElementsByClassName("login-input")[3];
      logininput.classList.remove("login-error");
      logininput.classList.remove("login-finish");
      logininput.classList.add("login-vaild");
      logininput.classList.add("login-vaild");
    },
  },
};
</script>

<style>
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 8rem;
  max-width: 45rem;
  height: 65vh;
}

/* 文字*/
.login-content .login-join {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-content .login-join h1 {
  color: #65dff5;
}
.login-content .login-join h2 {
  color: #fff;
}

/* 表单内 */
.login-content .login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form .login-main-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 45rem;
  height: 10rem;
  margin-top: 3rem;
}

.login-input {
  position: relative;
  width: 15rem;
  height: 3rem;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  margin-bottom: 0.2rem;
}

.login-main-form input[type="text"] {
  border: 0;
  background: none;
  outline: none;
  background-color: #4d4d4d;
  border-radius: 2px;
  color: white;
  padding-left: 1rem;
  width: 15rem;
  height: 2.3rem;
}

/* 响应式 */
@media screen and (max-width: 800px) {
  .login-content .login-join {
    margin-top: 10vh;
  }
  .login-content {
    margin-top: 2rem;
  }
  .login-form .login-main-form {
    position: relative;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    align-items: center;
    width: 15.5rem;
    min-height: 200px;
    margin-top: 2rem;
  }
  .login-form .login-input {
    left: 0;
    min-width: 15.5rem;
    min-height: 3rem;
  }
  .login-form .login-main-form input[type="text"] {
    min-width: 15.5rem;
    margin-bottom: 0;
  }
  .login-form .login-main-form textarea {
    display: none;
  }
  .login-form .login-button {
    margin-top: 15vh;
    min-height: 23px;
  }
}

/* 表单验证样式 */
.login-vaild::after {
  content: "";
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: url("../../assets/techlogin/images/沙漏.png") center;
}
.login-finish::after {
  content: "";
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: url("../../assets/techlogin/images/成功.png") center;
}
.login-error::after {
  content: "";
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: url("../../assets/techlogin/images/错误.png") center;
}
.login-input p {
  font-size: 1px;
  color: white;
}

.login-main-form textarea {
  border: 0;
  background: none;
  outline: none;
  background-color: #4d4d4d;
  border-radius: 2px;
  width: 15rem;
  height: 6rem;
  color: #fff;
  padding-left: 1rem;
  resize: none;
  padding-top: 0.5rem;
}
.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  outline: none;
  background: none;
  border: 1px solid #fff;
  border-radius: 2px;
  width: 8rem;
  height: 1.7rem;
  margin-top: 7rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: buttonanimate 3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
/* .login-button:hover {
  color: #262626;
  background: #65dff5;
} */
.login-button:before {
  content: "";
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 7.95rem;
  height: 1.8rem;
  background: transparent;
  border: 0px solid #65dff5;
  animation: buttonafter 3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
/* .login-button:hover:before {
  border: 1.2px solid #fff;
  transform: scale(1.2, 1.4);
  opacity: 0;
  transition: 0.4s;
} */

@keyframes buttonanimate {
  0% {
  }
  50% {
    color: #262626;
    background: #65dff5;
  }
  100% {
    color: #262626;
    background: #65dff5;
  }
}
@keyframes buttonafter {
  0% {
  }
  50% {
    border: 1.2px solid #fff;
    transform: scale(1.2, 1.4);
    opacity: 0;
    transition: 0.4s;
  }
  100% {
    border: 1.2px solid #fff;
    transform: scale(1.2, 1.4);
    opacity: 0;
    transition: 0.4s;
  }
}

/* 当屏幕大于1500px时 */
@media screen and (min-width: 1300px) {
  .login-join {
    margin-top: 12vh;
  }
  .login-form .login-main-form {
    width: 46rem;
    height: 13rem;
    margin-top: 6rem;
  }
  .login-form .login-input {
    width: 21rem;
    height: 3.5rem;
  }
  .login-form .login-main-form input[type="text"] {
    width: 21rem;
    height: 3.5rem;
    border-radius: 4px;
  }
  .login-main-form textarea {
    width: 21rem;
    height: 8rem;
    border-radius: 5px;
  }
  .login-button {
    margin-top: 8rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: 4px;
  }
}
</style>
