import { put, call, all, takeLatest, takeEvery, AllEffect } from 'redux-saga/effects'
import api from 'utils/api'
import request from 'utils/request'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { ActionTypes } from './constants'
import { HomeActionType, HomeActions } from './actions'

const homeUrl = `${api.domain}${api.resources.home}`

export function* getNodes(action: HomeActionType) {
  if (action.type !== ActionTypes.LOAD_NODES) { return }

  const { nodesLoaded, nodesLoadingError } = HomeActions
  let nodes: TSNode[]
  try {
    nodes = yield call(request, `${homeUrl}node`)
    yield put(nodesLoaded(nodes))
  } catch {
    yield put(nodesLoadingError())
  }
}

export function* getLinks(action: HomeActionType) {
  if (action.type !== ActionTypes.LOAD_LINKS) { return }

  const { linksLoaded, linksLoadingError } = HomeActions
  let links: TSLink[]
  try {
    links = yield call(request, `${homeUrl}link`)
    yield put(linksLoaded(links))
  } catch {
    yield put(linksLoadingError())
  }
}

export default function* homeSaga(): IterableIterator<AllEffect> {
  yield all([
    takeLatest(ActionTypes.LOAD_NODES, getNodes),
    takeLatest(ActionTypes.LOAD_LINKS, getLinks)
  ])
}
