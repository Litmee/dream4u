<template>
  <div id="login_view">
    <button class="change_theme" @click="changeTheme">切换出题</button>
    <label>
      <input type="checkbox" class=""/>
      <div class="icon">
        <div class="shadow"></div>
        <div class="iconBox"></div>
      </div>
    </label>
    <LoginComVue :theme="th"/>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import LoginComVue from '@/components/LoginCom.vue'

export default defineComponent({
  components: {
    LoginComVue
  },
  setup () {
    const th = ref<string>('default')
    const changeTheme = () => {
      if (th.value === 'other') {
        th.value = 'default'
      } else {
        th.value = 'other'
      }
    }
    return {
      th,
      changeTheme
    }
  }
})

</script>

<style lang="less">
  #login_view {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .change_theme {
    position: absolute;
    cursor: pointer;
    top: 2%;
    right: 5%;
    z-index: 5;
  }
  label {
    position: absolute;
    top: 5%;
    left: 10%;
    width: 120px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 50;
  }
  label::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    background: #444;
    border-radius: 4px;
  }
  label input {
    position: absolute;
    appearance: none;
  }
  .icon {
    position: absolute;
    left: 0;
    width: 60px;
    height: 100%;
    transition: .5s;
  }
  label input:checked ~ .icon {
    left: 60px;
  }
  .icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    filter: blur(1px);
    z-index: 2;
  }
  .icon::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    filter: blur(1px);
  }
  .shadow {
    position: absolute;
    top: 30px;
    left: -12px;
    width: 84.85px;
    height: 300px;
    background: linear-gradient(180deg, rgba(0, 0, 0, .1), transparent, transparent);
    transform-origin: top;
    transform: rotate(315deg);
    pointer-events: none;
  }
  .iconBox {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .1),
    15px 15px 15px rgba(0, 0, 0, .1),
    20px 20px 15px rgba(0, 0, 0, .1),
    30px 30px 15px rgba(0, 0, 0, .1),
    inset 1px 1px 2px #fff;
  }
</style>
