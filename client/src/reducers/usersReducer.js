import {
  AUTH,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  LOGOUT,
  LOGOUT_FAILED,
} from '../constants/actionsConstants.js'

const usersReducer = (state = { userData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, userData: action.payload }

    case SIGNIN_FAIL:
      return { error: action.payload }

    case SIGNUP_FAIL:
      return { error: action.payload }

    case LOGOUT:
      localStorage.removeItem('user')
      return { ...state, userData: null }

    case LOGOUT_FAILED:
      return { error: action.payload }

    default:
      return state
  }
}

export default usersReducer
