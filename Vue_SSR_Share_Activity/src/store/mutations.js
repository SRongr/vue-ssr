import Vue from 'vue'

export default {
  SET_DATA1: (state, { data1 }) => {
    Vue.set(state.users, data1 || false) /* false means data1 not found */
  }
}
