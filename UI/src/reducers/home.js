import { INITIAL } from '../constants/ActionTypes'

const initialState = { text: 'Home' }

const handlers = {
  [INITIAL]: () => ({ ...initialState }),
}

export default function events(state = initialState, { type, payload }) {
  return handlers[type] ? handlers[type](state, payload) : state
}
