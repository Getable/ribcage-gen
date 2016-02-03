import React, {PropTypes, Component} from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import styles from './index.css'
import Columns from '../_pieces/columns'

const mapStateToProps = (state) => {
  return {}
}
// NOTE: if this component is used directly by react-router, not use the
// pureRender decorator. It will cause the <Link> component to not re-render.
@connect(mapStateToProps)
export default class {{PascalName}} extends Component {
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

    return (<Columns>

      <Helmet
        title={pageTitle}
        meta={[{ name: 'description', content: pageMetaDescription}]}
      />

      <div>
        <h1 className={styles.title} testRef="title">{pageTitle} component</h1>
        <img src={`http://loremflickr.com/600/600/${pageTitle}`} alt={pageTitle} />
      </div>

    </Columns>)
  }
}

