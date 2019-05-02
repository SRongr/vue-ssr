<template>
  <div class="user-view">
    <h2>{{name}}</h2>
    <demo />
  </div>
</template>

<script>
import Demo from '../components/Demo.vue'

export default {
  name: 'test-view',
  components: {
    Demo
  },
  data() {
    return {
      name: 'SRongr'
    }
  }
}
</script>

<style lang="stylus"></style>
