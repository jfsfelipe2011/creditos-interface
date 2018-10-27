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
    creditsList: [],
    extractsList: [],
    saldoView: {}
  },
  mutations: {
    updateCreditsList (state, data) {
      state.creditsList = data
    },
    updateExtractsList (state, data) {
      state.extractsList = data
    },
    updateSaldoView (state, data) {
      state.saldoView = data
    }
  },
  actions: {
    getCredits (context, id) {
      setHeader()
      Vue.http.get('http://creditos/clients/' + id + '/creditos').then(response => {
        context.commit('updateCreditsList', response.data)
      })
    },
    getSaldo (context, id) {
      setHeader()
      Vue.http.get('http://creditos/clients/' + id + '/saldo').then(response => {
        context.commit('updateSaldoView', response.data)
      })
    },
    getExtrato (context, id) {
      setHeader()
      Vue.http.get('http://creditos/clients/' + id + '/extrato').then(response => {
        context.commit('updateExtractsList', response.data)
      })
    },
    recarregar (context, data) {
      setHeader()
      return Vue.http.post('http://creditos/recarregar/' + data.clientId, data)
    },
    remover (context, data) {
      setHeader()
      return Vue.http.post('http://creditos/remover/' + data.clientId, data)
    },
    estornar (context, data) {
      setHeader()
      return Vue.http.post('http://creditos/estornar/' + data.clientId, data)
    }
  }
}
