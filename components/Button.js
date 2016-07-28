import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Button extends Component {
  onClick() {
    store.dispatch({type: '1UP'})
  }

  render() {
    return <div className="mdl-cell mdl-cell--1-col">
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={() => this.onClick()}>
        {this.props.lives}
      </button>
    </div>
  }
}


const mapStateToProps = function(store) {
  return {
    lives: store.gameState.lives
  }
}

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     onClick: function() {
//       dispatch({type: '1UP'})
//     }
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Thing)
export default connect(mapStateToProps)(Button)
