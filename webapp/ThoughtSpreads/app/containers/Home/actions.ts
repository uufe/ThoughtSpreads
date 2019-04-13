import { ActionTypes } from './constants'
import { returnType } from 'utils/redux'

export const HomeActions = {
  loadLinks() {
    return {
      type: ActionTypes.LOAD_LINKS,
      payload: {}
    }
  },
  linksLoaded(links: TSLink[]) {
    return {
      type: ActionTypes.LOAD_LINKS_SUCCESS,
      payload: {
        links
      }
    }
  },
  linksLoadingError() {
    return {
      type: ActionTypes.LOAD_LINKS_ERROR,
      payload: {}
    }
  },

  loadNodes() {
    return {
      type: ActionTypes.LOAD_NODES,
      payload: {}
    }
  },
  nodesLoaded(nodes: TSNode[]) {
    return {
      type: ActionTypes.LOAD_NODES_SUCCESS,
      payload: {
        nodes
      }
    }
  },
  nodesLoadingError() {
    return {
      type: ActionTypes.LOAD_NODES_ERROR,
      payload: {}
    }
  }
}

const mockAction = returnType(HomeActions)
export type HomeActionType = typeof mockAction

export default HomeActions

