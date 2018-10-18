import Home from '../components/Home/Home'
import Login from '../components/Login/Form'
import UsersList from '../components/User/List'
import UsersView from '../components/User/View'
import UsersCreate from '../components/User/Create'
import UsersEdit from '../components/User/Edit'

let getToken = function () {
  let token = localStorage['token']
  if (!token) {
    token = '{}'
  }
  return JSON.parse(token)
}

const authenticated = (to, from, next) => {
  let token = getToken()
  if (!token.access_token) {
    next('/login')
    return
  }
  next()
}

const routes = [
  {path: '/', name: 'Home', component: Home, beforeEnter: authenticated},
  {path: '/login', name: 'Login', component: Login},
  {path: '/usuarios', name: 'UsersList', component: UsersList, beforeEnter: authenticated},
  {path: '/usuarios/novo', name: 'UsersCreate', component: UsersCreate, beforeEnter: authenticated},
  {path: '/usuarios/:id', name: 'UsersView', component: UsersView, beforeEnter: authenticated},
  {path: '/usuarios/:id/editar', name: 'UsersEdit', component: UsersEdit, beforeEnter: authenticated}
]

export default routes
