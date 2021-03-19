import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

//modules
import patient from './modules/patient'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    patient,
  },
  strict: false,
  plugins: debug ? [createLogger()] : [],
})
