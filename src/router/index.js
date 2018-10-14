import Home from '../components/Home/Home'
import Login from '../components/Login/Form'
import UsersList from '../components/User/List'
import UsersView from '../components/User/View'
import UsersCreate from '../components/User/Create'
import UsersEdit from '../components/User/Edit'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/usuarios', name: 'UsersList', component: UsersList},
  {path: '/usuarios/novo', name: 'UsersCreate', component: UsersCreate},
  {path: '/usuarios/:id', name: 'UsersView', component: UsersView},
  {path: '/usuarios/:id/editar', name: 'UsersEdit', component: UsersEdit}
]

export default routes
