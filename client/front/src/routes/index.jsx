import {Router, Route, IndexRoute, Redirect} from 'inferno-router'
import {createBrowserHistory} from 'history'
import App from 'components/App'
import Main from 'components/layout/main'

import Dashboard from 'views/dashboard'
import Article from 'views/article'

const routes = (
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="/dashboard" component={Main}>
        <IndexRoute component={Dashboard}></IndexRoute>
      </Route>
      <Route path="/article" component={Main}>
        <IndexRoute component={Article}></IndexRoute>
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)

export default routes
