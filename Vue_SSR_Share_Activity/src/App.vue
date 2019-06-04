<template>
  <div id="app">
       <router-link to="/">home</router-link>
    <router-link to="/test">test</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<style lang="stylus">
  body
    font-size 16px

  a
    color #34495e

  @media (max-width 960px)
    body 16px

</style>
