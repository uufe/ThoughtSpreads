/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { RouteComponentProps } from 'react-router-dom'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import reducer from './reducer'
import saga from './saga'

import { HomeActions, HomeActionType } from './actions'
import { makeSelectNodes, makeSelectLinks, makeSelectLoading } from './selectors'
import { HomeLoading } from './types'

interface HomeStateProps {
  nodes: TSNode[]
  links: TSLink[]
  loading: HomeLoading
}

interface HomeDispatchProps {
  onLoadNodes: () => void,
  onLoadLinks: () => void
}

export class Home extends React.Component<HomeStateProps & HomeDispatchProps & RouteComponentProps> {
  constructor(props) {
    super(props)
    const { onLoadNodes, onLoadLinks } = this.props
    onLoadNodes()
    onLoadLinks()
  }

  public render() {
    const { nodes } = this.props

    return (
      <div>
        {JSON.stringify(nodes)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<HomeActionType>) => ({
  onLoadNodes: () => dispatch(HomeActions.loadNodes()),
  onLoadLinks: () => dispatch(HomeActions.loadLinks())
})

const mapStateToProps = createStructuredSelector({
  links: makeSelectNodes(),
  nodes: makeSelectLinks(),
  loading: makeSelectLoading()
})

// @FIXME connect typing
// <HomeStateProps, HomeDispatchProps, RouteComponentProps>
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'home', reducer })
const withSaga = injectSaga({ key: 'home', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Home)
