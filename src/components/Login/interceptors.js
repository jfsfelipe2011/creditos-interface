let getToken = function () {
  let token = localStorage['token']
  if (!token) {
    token = '{}'
  }
  return JSON.parse(token)
}

let login = function (router) {
  router.push('./login')
}

export default {
  check_empty_token: function (router) {
    let token = getToken()
    if (!token.access_token) {
      login(router)
    }
  }
}
