import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Color extends Component {
  onChange(e, color) {
    store.dispatch({type: color.toUpperCase(), value: Number(e.target.value)})
  }

  render() {
    return <div><input className="mdl-slider mdl-js-slider" type="range" min="0" max="255" value={this.props[this.props.color]} onChange={(e) => this.onChange(e, this.props.color)} /></div>
  }
}

const mapStateToProps = function(store) {
  return {
    red: store.colorState.colors.red,
    green: store.colorState.colors.green,
    blue: store.colorState.colors.blue
  }
}

export default connect(mapStateToProps)(Color)
