import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionsConstants'

import * as api from '../axios'

export const fetchMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemories()

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}
