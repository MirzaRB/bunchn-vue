import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import PersonalInformation from './views/PersonalInformation.vue'
import Account from './views/Account.vue'
import BunchAttributes from './views/BunchAttributes.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, name: 'home', meta: { title: 'Home' } },
  { path: '/login', component: Login, meta: { title: 'Login' } },
  { path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard' } },
  {
    path: '/personal-information',
    component: PersonalInformation,
    meta: { title: 'Personal Information' },
  },
  {
    path: '/account',
    component: Account,
    meta: { title: 'Account' },
  },
  {
    path: '/attributes',
    component: BunchAttributes,
    meta: { title: 'Bunch Attributes' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Page not found' },
  },
]
