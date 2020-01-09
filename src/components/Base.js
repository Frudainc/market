import React from 'react'

import { Header, InfoBar, Mailing, Footer } from './'

class Base extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Header />
        <InfoBar />
        {children}
        <Mailing />
        <Footer />
      </>
    )
  }
}

export default Base
