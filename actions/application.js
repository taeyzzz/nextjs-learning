// import { post, postForm, get } from '../utils'

export const CHANGE_MESSAGE = "CHANGE_MESSAGE"

export const changeMessage = (msg) => {
  return {
    type: CHANGE_MESSAGE,
    payload: {
      msg
    }
  }
}

export const LOAD_MESSAGE_REQUEST = "LOAD_MESSAGE_REQUEST"
export const LOAD_MESSAGE_SUCCESS = "LOAD_MESSAGE_SUCCESS"
export const LOAD_MESSAGE_FAILURE = "LOAD_MESSAGE_FAILURE"
export const LOAD_MESSAGE_IDLE = "LOAD_MESSAGE_IDLE"

const loadMessageRequest = () => {
  return {
    type: LOAD_MESSAGE_REQUEST,
  }
}

const loadMessageSuccess = (message) => {
  return {
    type: LOAD_MESSAGE_SUCCESS,
    payload: {
      message
    }
  }
}

const loadMessageFailure = (error) => {
  return {
    type: LOAD_MESSAGE_FAILURE,
    payload: {
      error,
    }
  }
}

const loadMessageIdle = () => {
  return {
    type: LOAD_MESSAGE_IDLE,
  }
}

export const loadMessage = () => {
  return async dispatch => {
    dispatch(loadMessageRequest())
    try {
      const message = await new Promise(function(resolve, reject) {
        setTimeout(function () {
          resolve("message is loaded")
        }, 1000);
      });
      dispatch(loadMessageSuccess(message))
    }
    catch (err) {
      dispatch(loadMessageFailure(err))
    }
    finally{
      dispatch(loadMessageIdle())
    }
  }
}
