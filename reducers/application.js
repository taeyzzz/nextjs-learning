import {
  CHANGE_MESSAGE,
  LOAD_MESSAGE_REQUEST,
  LOAD_MESSAGE_SUCCESS,
  LOAD_MESSAGE_FAILURE,
  LOAD_MESSAGE_IDLE,
} from '../actions/application'

const initialState = {
  message: "reducer",
  loadMessage: {
    fetchStatus: "idle"
  }
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return Object.assign({}, state, {
        message: action.payload.msg
      })
    }
    case LOAD_MESSAGE_REQUEST: {
      return Object.assign({}, state, {
        loadMessage: Object.assign({}, state.loadMessage, {
          fetchStatus: "request"
        })
      })
    }
    case LOAD_MESSAGE_SUCCESS: {
      return Object.assign({}, state, {
        message: action.payload.message,
        loadMessage: Object.assign({}, state.loadMessage, {
          fetchStatus: "success"
        })
      })
    }
    case LOAD_MESSAGE_FAILURE: {
      return Object.assign({}, state, {
        loadMessage: Object.assign({}, state.loadMessage, {
          fetchStatus: "failure",
          error: action.payload.error
        })
      })
    }
    case LOAD_MESSAGE_IDLE: {
      return Object.assign({}, state, {
        loadMessage: Object.assign({}, state.loadMessage, {
          fetchStatus: "idle"
        })
      })
    }
    default: {
      return state
    }
  }
}

export default application
