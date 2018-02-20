// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import ModalExample from '../modal-example'
import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    compose: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
}

const HomePage = ({ classes }: { classes: Object }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <div className="col-mb-4 mb-4">
          <h3 className="mb-3">Bootstrap</h3>
          <p>
            <button
              type="button"
              data-toggle="modal"
              data-target=".js-modal-example"
              className="btn btn-primary"
            >
              Open Modal
            </button>
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">JSS (soon)</h3>
          <p>Open your browser console.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <h3 className="mb-3">JSS</h3>
      <p className={classes.hoverMe}>Hover me.</p>
      <p className={classes.resizeMe}>Resize me window.</p>
      <button className={classes.specialButton}>Composition</button>
    </div>
    <ModalExample />
  </div>
)

export default injectSheet(styles)(HomePage)
