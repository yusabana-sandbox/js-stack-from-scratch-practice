// @flow

import React from 'react'
import Helmet from 'react-helmet'

import ModalExample from '../modal-example'
import { APP_NAME } from '../../config'

const HomePage = () => (
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
    <ModalExample />
  </div>
)

export default HomePage
