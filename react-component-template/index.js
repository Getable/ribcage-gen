import React, {PropTypes, Component} from 'react'
import {immutableRenderDecorator as pureRender} from '@joeybaker/react-immutable-render-mixin'
import styles from './index.css'

// NOTE: if this component is used directly by react-router, not use the
// pureRender decorator. It will cause the <Link> component to not re-render.
@pureRender
export default class {{PascalName}} extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  static defaultProps = {
    name: '{{titleName}}'
  }

  render () {
    return (<div className={styles.container}>
      <h1>{this.props.name} component</h1>
      <img
        src={`http://loremflickr.com/600/600/${this.props.name}`}
        alt={this.props.name}
      />
    </div>)
  }
}

