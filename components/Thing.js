import React from 'react'

class Thing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'Click Me'
    }
  }

  onClick() {
    this.setState({label: Math.random()})
  }

  render() {
    return <div style={{width: '200px', height: '200px', backgroundColor: 'gray', margin: '10px'}} onClick={() => this.onClick()}>{this.state.label}</div>
  }
}

export default Thing
