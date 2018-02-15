// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello',
})

// reduxのdispatchを引数にしたhandleClickのFunction
const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(sayHello('Hello!'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
