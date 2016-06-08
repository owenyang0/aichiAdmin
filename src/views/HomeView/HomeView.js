/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'

import { increment, doubleAsync } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'

const cx = classnames.bind(classes)

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component {
  props: Props;
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div className={cx('container', 'home')}>
        <div className='hero'>
          <h2 className='hero__head'>AiChi Admin Dashboard</h2>
          <p className={cx('hero__text')}>Use our serverless platform to operate your data in minutes.</p>
          <div className={cx('hero__btn--container')}>
            <button className='btn btn-primary' onClick={this.props.increment}>GET STARTED</button>
            {' '}
            <button className='btn btn-default' onClick={this.props.doubleAsync}>
              Double (Async)
            </button>
            <div className={cx('counter')}>{this.props.counter}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect(mapStateToProps, {
  increment: () => increment(1),
  doubleAsync
})(HomeView)
