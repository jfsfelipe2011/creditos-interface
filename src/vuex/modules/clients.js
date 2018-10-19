import Vue from 'vue'

let getToken = function () {
  let token = localStorage['token']
  if (!token) {
    token = '{}'
  }
  return JSON.parse(token)
}

let setHeader = function () {
  let token = getToken()
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', 'Bearer ' + token.access_token)
    next()
  })
}

export default {
  state: {
    clientsList: [],
    clientsView: {}
  },
  mutations: {
    updateClientsList (state, data) {
      state.clientsList = data
    },
    updateClientsView (state, data) {
      state.clientsView = data
    }
  },
  actions: {
    getClients (context) {
      setHeader()
      Vue.http.get('http://creditos/clients').then(response => {
        context.commit('updateClientsList', response.data)
      })
    },
    newClient (context, data) {
      setHeader()
      return Vue.http.post('http://creditos/clients', data)
    },
    getClient (context, id) {
      setHeader()
      Vue.http.get('http://creditos/clients/' + id).then(response => {
        context.commit('updateClientsView', response.data)
      })
    },
    removeClient (context, id) {
      setHeader()
      return Vue.http.delete('http://creditos/clients/' + id)
    },
    updateClient (context, data) {
      setHeader()
      return Vue.http.put('http://creditos/clients/' + data.id, data)
    }
  }
}
