import { Record } from 'immutable'
import { HomeState } from './types'

import { ActionTypes } from './constants'
import { HomeActionType } from './actions'

const HomeRecord = Record<HomeState>({
  nodes: [],
  links: [],
  loading: {
    nodes: false,
    links: false
  }
})

const initialState = new HomeRecord()

function homeReducer(state = initialState, action: HomeActionType) {
  const nodes = state.get('nodes')
  const links = state.get('links')
  const loading = state.get('loading')


  switch (action.type) {
    case ActionTypes.LOAD_NODES:
      return state.set('loading', { ...loading, nodes: true })
    case ActionTypes.LOAD_NODES_SUCCESS:
      return state.set('nodes', action.payload.nodes)
    case ActionTypes.LOAD_NODES_ERROR:
      return state.set('loading', { ...loading, nodes: false })

    case ActionTypes.LOAD_LINKS:
      return state.set('loading', { ...loading, links: true })
    case ActionTypes.LOAD_LINKS_SUCCESS:
      return state.set('links', action.payload.links)
    case ActionTypes.LOAD_LINKS_ERROR:
      return state.set('loading', { ...loading, links: false })
    default:
      return state
  }
}

export type HomeStateType = typeof initialState
export default homeReducer
