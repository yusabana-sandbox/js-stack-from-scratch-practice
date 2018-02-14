// @flow

import { connect } from 'react-redux'
import Message from '../component/message'

// redux app の state を Message コンポーネントに連結
const mapStateToProps = state => ({
  message: state.hello.get('message'),
})

export default connect(mapStateToProps)(Message)
