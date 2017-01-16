import Inferno from 'inferno'
import routes from 'routes'

if (module.hot) {
    require('inferno-devtools')
}

Inferno.render(routes, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
