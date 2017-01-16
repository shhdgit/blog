import 'src/assets/styles/reset.css'
import 'src/assets/styles/functional.css'
import style from './App.css'
import Component from 'inferno-component'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
