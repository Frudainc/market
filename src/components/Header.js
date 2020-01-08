import React, { Component } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { Logo } from '../svg'

export default class Header extends Component {
  state = {
    navActive: false,
  }

  toggleNav = () => {
    this.setState({
      navActive: !this.state.navActive,
    })
  }

  render() {
    const { navActive } = this.state

    return (
      <header className={classNames('header', { navActive })}>
        <div className="width">
          <Link className="header-logo" to="/">
            <Logo />
          </Link>

          <button onClick={this.toggleNav} className="hamburger">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <ul className="nav">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">What's New</Link>
            </li>
            <li>
              <Link to="/">Herald</Link>
            </li>
            <li>
              <Link to="/">Getchell's</Link>
            </li>
            <li>
              <Link to="/">Find Us</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
