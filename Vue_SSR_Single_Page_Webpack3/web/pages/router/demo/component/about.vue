


<template lang="pug">
  .wrapper
    .text ada a
    span about   
    input(type='text', v-model='value')
    br
    
    .text {{value}}


</template>
<script>
export default {
  data() {
    return {
      value: '234567'
    }
  },
  methods: {
    
  },
  computed: {
    getValue(value) {
      this.$store.dispatch('getValue')
    }
  },
}
</script>