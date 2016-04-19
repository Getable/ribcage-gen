import React, {PropTypes, Component} from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import styles from './index.css'
import {routerShape} from 'react-router'

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
export default class {{PascalName}} extends Component {
  static contextTypes = {
    router: routerShape.isRequired
  }

  static propTypes = {
    pageTitle: PropTypes.string.isRequired
    , pageMetaDescription: PropTypes.string.isRequired
  }

  static defaultProps = {
    pageTitle: '{{titleName}}'
    , pageMetaDescription: ''
  }

  static getData ({store, params}, done) {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      if (state && state.page.loaded) {
        unsubscribe()
        done(null, state)
      }
    })
    store.dispatch({})
  }

  render () {
    const {
      pageTitle
      , pageMetaDescription
    } = this.props

    return (<div className={styles.page}>

      <Helmet
        title={pageTitle}
        meta={[{name: 'description', content: pageMetaDescription}]}
      />

      <div>
        <h1 testRef="title">{pageTitle} component</h1>
        <img src={`http://loremflickr.com/600/600/${pageTitle}`} alt={pageTitle} />
      </div>

    </div>)
  }
}

