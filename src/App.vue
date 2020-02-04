
<template>
  <div id="app">
    <!-- detail页面不做缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>
