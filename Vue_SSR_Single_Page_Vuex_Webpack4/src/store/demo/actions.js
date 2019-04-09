// import { resolve } from "url";
import axios from 'axios'
export default {
	getValue: ({commit}) => {
    return axios.get('http://localhost:3000/api/getValue').then(res => {
      commit('setValue', res.data)
    })
  }
}
