
<template>
    <div id='app'>
         <h1>VUE-SSR</h1>
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/blog">blog</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
h1 
  color red
</style>

