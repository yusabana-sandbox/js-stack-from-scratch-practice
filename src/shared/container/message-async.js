// @flow

import { connect } from 'react-redux'
import MessageAsync from '../component/message'

const mapStateToProp = state => ({
  message: state.hello.get('messageAsync'),
})

export default connect(mapStateToProp)(MessageAsync)
