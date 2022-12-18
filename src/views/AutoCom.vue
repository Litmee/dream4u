<template>
  <div class="auto_com">
    <h1>Auto Common</h1>
    <h1>Auto Common</h1>
    <h1>Auto Common</h1>
    <h1>Auto Common</h1>
    <h1>Auto Common</h1>
    <h1>Auto Common</h1>
    <h1>
      <button type="button" @click="changeTheme">切换主题</button>
    </h1>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const changeTheme = () => {
      document.getElementById('app')?.style.setProperty('--background_color', 'orange')
    }
    return {
      changeTheme
    }
  }
})
</script>

<style scoped lang="less">
@import '@/assets/less/common.less';
  .auto_com {
    color: @font_color;
  }
</style>
