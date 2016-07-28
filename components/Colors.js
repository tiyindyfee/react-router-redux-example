import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'

import Color from './Color'

var Colors = (props) => <div className="centered">
  <Color color="red" />
  <Color color="green" />
  <Color color="blue" />
  <div style={{width: '100%', height: '100px', backgroundColor:`rgb(${props.red}, ${props.green}, ${props.blue})`}}></div>
</div>

const mapStateToProps = function(store) {
  return {
    red: store.colorState.colors.red,
    green: store.colorState.colors.green,
    blue: store.colorState.colors.blue
  }
}

export default connect(mapStateToProps)(Colors)
