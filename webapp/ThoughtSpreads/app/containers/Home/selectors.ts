import { createSelector } from 'reselect'
import { HomeStateType } from './reducer'

const selectHome = (state) => state.get('home') as HomeStateType

const makeSelectNodes = () => createSelector(
  selectHome,
  (homeState: HomeStateType) => homeState.get('nodes')
)

const makeSelectLinks = () => createSelector(
  selectHome,
  (homeState: HomeStateType) => homeState.get('links')
)

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState: HomeStateType) => homeState.get('loading')
)

export {
  selectHome,
  makeSelectNodes,
  makeSelectLinks,
  makeSelectLoading
}
