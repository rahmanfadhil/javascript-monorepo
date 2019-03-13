import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import actionTypes from '../store/actionTypes'

function HomePage({ name }) {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{name}</p>
      <Link href="/about">
        <a>about page</a>
      </Link>
    </div>
  )
}

HomePage.getInitialProps = ({ store, isServer }) => {
  store.dispatch({
    type: actionTypes.SET_USER,
    payload: isServer ? 'from server' : 'from client',
  })
}

export default connect(({ name }) => ({ name }))(HomePage)
