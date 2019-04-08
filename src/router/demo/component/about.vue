


<template lang="pug">
  .wrapper
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
}
</script>