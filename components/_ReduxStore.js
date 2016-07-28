import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Redux reducer function
function gameReducer (state = {lives: 0}, action) {

  // Clone existing state into a new object we can mutate
  var newState = Object.assign({}, state, state)

  // Based on the type being dispatched, mutate newState
  switch (action.type) {
    case '1UP':
      newState.lives += 1
      break
    case 'ENEMY':
      newState.lives -= 1
      break
  }

  return newState
}

function colorReducer (state = {colors: {red: 0, green: 0, blue: 0}}, action) {

  // Clone existing state into a new object we can mutate
  var newState = Object.assign({}, state, state)

  // Based on the type being dispatched, mutate newState
  switch (action.type) {
    case 'RED':
      newState.colors.red = action.value
      break
    case 'GREEN':
      newState.colors.green = action.value
      break
    case 'BLUE':
      newState.colors.blue = action.value
      break
  }

  return newState
}

// Merge our gameReducer with the React Router Redux reducer helper
const store = createStore(
  combineReducers({
    gameState: gameReducer,
    colorState: colorReducer,
    routing: routerReducer
  })
)

export default store
