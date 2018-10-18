import Crypto from 'crypto-js'
import Vue from 'vue'

let setHeader = function () {
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', 'Basic YWRtaW5AZW1haWwuY29tOnNlbmFjMjAxOA==')
    next()
  })
}

export default {
  state: {
    userView: {},
    singleUser: {},
    userList: []
  },
  mutations: {
    updateUserView (state, data) {
      state.userView = data
    },
    updateUserList (state, data) {
      state.userList = data
    },
    updateSingleUser (state, data) {
      state.singleUser = data
    }
  },
  actions: {
    getUser (context) {
      let bytes = Crypto.AES.decrypt(localStorage['email'], 'IsyFWd6DEMedpf2n3Rpe')
      let user = bytes.toString(Crypto.enc.Utf8)
      context.commit('updateUserView', user)
    },
    getUsers (context) {
      setHeader()
      Vue.http.get('http://creditos/users').then(response => {
        context.commit('updateUserList', response.data)
      })
    },
    newUser (context, data) {
      setHeader()
      return Vue.http.post('http://creditos/users', data)
    },
    getSingleUser (context, id) {
      setHeader()
      Vue.http.get('http://creditos/users/' + id).then(response => {
        context.commit('updateSingleUser', response.data)
      })
    },
    removeUser (context, id) {
      setHeader()
      return Vue.http.delete('http://creditos/users/' + id)
    },
    updateUser (context, data) {
      setHeader()
      return Vue.http.put('http://creditos/users/' + data.id, data)
    }
  }
}
