import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionsConstants'

export default (memories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload

    default:
      return memories
  }
}
