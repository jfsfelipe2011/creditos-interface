import Home from '../components/Home/Home'
import Login from '../components/Login/Form'
import UsersList from '../components/User/List'
import UsersView from '../components/User/View'
import UsersCreate from '../components/User/Create'
import UsersEdit from '../components/User/Edit'
import Crypto from 'crypto-js'
import ClientsList from '../components/Client/List'
import ClientsCreate from '../components/Client/Create'
import ClientsView from '../components/Client/View'
import ClientsEdit from '../components/Client/Edit'

let getToken = function () {
  let token = localStorage['token']
  if (!token) {
    token = '{}'
  }
  return JSON.parse(token)
}

let getUser = function () {
  let bytes = Crypto.AES.decrypt(localStorage['email'], 'IsyFWd6DEMedpf2n3Rpe')
  let user = bytes.toString(Crypto.enc.Utf8)
  return user
}

const authenticated = (to, from, next) => {
  let token = getToken()
  if (!token.access_token) {
    next('/login')
    return
  }
  next()
}

const authenticatedAdmin = (to, from, next) => {
  let token = getToken()
  if (!token.access_token) {
    next('/login')
    return
  }
  let user = getUser()
  if (user !== 'admin@email.com') {
    next('/')
    return
  }
  next()
}

const routes = [
  {path: '/', name: 'Home', component: Home, beforeEnter: authenticated},
  {path: '/login', name: 'Login', component: Login},
  {path: '/usuarios', name: 'UsersList', component: UsersList, beforeEnter: authenticatedAdmin},
  {path: '/usuarios/novo', name: 'UsersCreate', component: UsersCreate, beforeEnter: authenticatedAdmin},
  {path: '/usuarios/:id', name: 'UsersView', component: UsersView, beforeEnter: authenticatedAdmin},
  {path: '/usuarios/:id/editar', name: 'UsersEdit', component: UsersEdit, beforeEnter: authenticatedAdmin},
  {path: '/clientes', name: 'ClientsList', component: ClientsList, beforeEnter: authenticated},
  {path: '/clientes/novo', name: 'ClientsCreate', component: ClientsCreate, beforeEnter: authenticated},
  {path: '/clientes/:id', name: 'ClientsView', component: ClientsView, beforeEnter: authenticated},
  {path: '/clientes/:id/editar', name: 'ClientsEdit', component: ClientsEdit, beforeEnter: authenticated}
]

export default routes
