import Component from 'inferno-component'

export default class extends Component {
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
