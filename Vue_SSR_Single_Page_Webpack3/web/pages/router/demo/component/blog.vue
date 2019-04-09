<template lang="pug">
  .wrapper
    .title blog
    .content store: {{value}}
    //- button(@click="getValue(value)") 点我
</template>

<script>
export default {
  
  serverRequest(store) {
    return store.dispatch('getValue')  // 不加return 会导致Promise执行顺序混乱 不知道是不是js 的bug
  },
  mounted() {
    // console.log(this.$store)
  },
  computed: {
    value() {
      return this.$store.state.value
    }
  },
  methods: {
    getValue(value) {
      this.$store.dispatch('getValue')
    }
  },
}
</script>