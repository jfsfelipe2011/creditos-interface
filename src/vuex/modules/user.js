import Crypto from 'crypto-js'

export default {
  state: {
    userView: {}
  },
  mutations: {
    updateUserView (state, data) {
      state.userView = data
    }
  },
  actions: {
    getUser (context) {
      let bytes = Crypto.AES.decrypt(localStorage['email'], 'IsyFWd6DEMedpf2n3Rpe')
      let user = bytes.toString(Crypto.enc.Utf8)
      context.commit('updateUserView', user)
    }
  }
}
