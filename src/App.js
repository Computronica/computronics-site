import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './Routes'

const RouteWithTitle = ({ title, ...props }) => (
  <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Route {...props} />
  </div>
)

const App = () => (
  <Router>
    <Switch>
      {
      Routes.map((route, index) => (
        <RouteWithTitle
          key={route.groupKey || index}
          path={route.path}
          exact={route.exact}
          component={route.component}
          title={route.name}
        />
      ))
      }
    </Switch>
  </Router>
)

export default App
