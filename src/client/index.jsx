// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type')
}

ReactDOM.render(<App />, rootEl)
