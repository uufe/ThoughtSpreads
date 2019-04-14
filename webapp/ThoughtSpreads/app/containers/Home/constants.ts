import { createTypes } from 'utils/redux'

enum Types {
  LOAD_NODES = 'thoughtspreads/Home/LOAD_NODES',
  LOAD_NODES_SUCCESS = 'thoughtspreads/Home/LOAD_NODES_SUCCESS',
  LOAD_NODES_ERROR = 'thoughtspreads/Home/LOAD_NODES_ERROR',

  ADD_NODE = 'thoughtspreads/Home/ADD_NODE',
  ADD_NODE_SUCCESS = 'thoughtspreads/Home/ADD_NODE_SUCCESS',
  ADD_NODE_ERROR = 'thoughtspreads/Home/ADD_NODE_ERROR',

  EDIT_NODE = 'thoughtspreads/Home/EDIT_NODE',
  EDIT_NODE_SUCCESS = 'thoughtspreads/Home/EDIT_NODE_SUCCESS',
  EDIT_NODE_ERROR = 'thoughtspreads/Home/EDIT_NODE_ERROR',

  DELETE_NODE = 'thoughtspreads/Home/DELETE_NODE',
  DELETE_NODE_SUCCESS = 'thoughtspreads/Home/DELETE_NODE_SUCCESS',
  DELETE_NODE_ERROR = 'thoughtspreads/Home/DELETE_NODE_ERROR',

  LOAD_LINKS = 'thoughtspreads/Home/LOAD_LINKS',
  LOAD_LINKS_SUCCESS = 'thoughtspreads/Home/LOAD_LINKS_SUCCESS',
  LOAD_LINKS_ERROR = 'thoughtspreads/Home/LOAD_LINKS_ERROR',

  ADD_LINK = 'thoughtspreads/Home/ADD_LINK',
  ADD_LINK_SUCCESS = 'thoughtspreads/Home/ADD_LINK_SUCCESS',
  ADD_LINK_ERROR = 'thoughtspreads/Home/ADD_LINK_ERROR',

  EDIT_LINK = 'thoughtspreads/Home/EDIT_LINK',
  EDIT_LINK_SUCCESS = 'thoughtspreads/Home/EDIT_LINK_SUCCESS',
  EDIT_LINK_ERROR = 'thoughtspreads/Home/EDIT_LINK_ERROR',

  DELETE_LINK = 'thoughtspreads/Home/DELETE_LINK',
  DELETE_LINK_SUCCESS = 'thoughtspreads/Home/DELETE_LINK_SUCCESS',
  DELETE_LINK_ERROR = 'thoughtspreads/Home/DELETE_LINK_ERROR',
}

export const ActionTypes = createTypes(Types)
