import {
  CHANGE_MESSAGE,
  LOAD_MESSAGE_REQUEST,
  LOAD_MESSAGE_SUCCESS,
  LOAD_MESSAGE_FAILURE,
  LOAD_MESSAGE_IDLE,
  LOAD_LIST_USER_REQUEST,
  LOAD_LIST_USER_SUCCESS,
  LOAD_LIST_USER_FAILURE,
  LOAD_LIST_USER_IDLE,
} from '../actions/application'

const initialState = {
  message: "reducer",
  listUser: [],
  loadMessage: {
    fetchStatus: "idle"
  },
  loadListUser: {
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
    case LOAD_LIST_USER_REQUEST: {
      return Object.assign({}, state, {
        loadListUser: Object.assign({}, state.loadListUser, {
          fetchStatus: "request"
        })
      })
    }
    case LOAD_LIST_USER_SUCCESS: {
      return Object.assign({}, state, {
        listUser: action.payload.listUser,
        loadListUser: Object.assign({}, state.loadListUser, {
          fetchStatus: "success"
        })
      })
    }
    case LOAD_LIST_USER_FAILURE: {
      return Object.assign({}, state, {
        loadListUser: Object.assign({}, state.loadListUser, {
          fetchStatus: "failure",
          error: action.payload.error
        })
      })
    }
    case LOAD_LIST_USER_IDLE: {
      return Object.assign({}, state, {
        loadListUser: Object.assign({}, state.loadListUser, {
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
