<template>
  <div v-if="theme == 'default'" class="login_com default_login">
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    <div id="default_form">
      <div class="content">
        <h2>Sign In</h2>
        <div class="form">
          <div class="inputBx">
            <input type="text" required>
            <i>Username</i>
          </div>
          <div class="inputBx">
            <input type="password" required>
            <i>Password</i>
          </div>
          <div class="links">
            <a>Forgot Password</a>
            <a>Signup</a>
          </div>
          <div class="inputBx">
            <input type="button" value="Login">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="theme == 'other'">
    <h1>yy</h1>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: 'default'
    }
  },
  setup () {
    return {}
  }
})

</script>

<style lang="less">
  .login_com {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .default_login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    flex-wrap: wrap;
    overflow: hidden;
    background: #000;
    span {
      position: relative;
      display: block;
      width: calc(6.25vw - 2px);
      height: calc(6.25vw - 2px);
      background: #181818;
      z-index: 2;
      transition: 1.5s;
    }
    span:hover {
      background: #0f0;
      transition: 0s;
    }
    #default_form {
      position: absolute;
      width: 400px;
      background: #222;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      border-radius: 4px;
      box-shadow: 0px 15px 35px rgba(0, 0, 0, .5);
      .content {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        h2 {
          font-size: 2em;
          color: #0f0;
          text-transform: uppercase;
        }
        .form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 25px;
          .inputBx {
            position: relative;
            width: 100%;
            input {
              position: relative;
              width: 100%;
              background: #333;
              border: none;
              outline: none;
              padding: 25px 10px 7.5px;
              border-radius: 4px;
              color: #fff;
              font-weight: 500;
              font-size: 1em;
            }
            input:focus ~ i, input:valid ~ i {
              transform: translateY(-7.5px);
              font-size: .8em;
              color: #fff;
            }
            i {
              position: absolute;
              left: 0;
              padding: 15px 10px;
              font-style: normal;
              color: #aaa;
              transition: .5s;
              pointer-events: none;
            }
            input[type="button"] {
              padding: 10px;
              background: #0f0;
              color: #111;
              font-weight: 600;
              font-size: 1.25em;
              letter-spacing: 0.05em;
              cursor: pointer;
            }
          }
          .links {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-between;
            a {
              color: #fff;
              text-decoration: none;
              cursor: pointer;
            }
            a:nth-child(2) {
              color: #0f0;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  .default_login::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #0f0, #000);
    animation: animate 5s linear infinite;
  }
  @keyframes animate {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100%);
    }
  }
  @media (max-width: 900px) {
    .default_login span {
      width: calc(10vw - 2px) !important;
      height: calc(10vw - 2px) !important;
    }
  }
  @media (max-width: 600px) {
    .default_login span {
      width: calc(20vw - 2px) !important;
      height: calc(20vw - 2px) !important;
    }
  }
</style>
