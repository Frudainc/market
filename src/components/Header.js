import React, { Component } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'

import { Logo } from '../svg'

export class Header extends Component {
  state = {
    navActive: false,
  }

  toggleNav = () => {
    this.setState({
      navActive: !this.state.navActive,
    })
  }

  handleClickOutside = () => {
    this.setState({
      navActive: false,
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
              <Link onClick={this.toggleNav} to="/">
                About
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleNav} to="/">
                Events
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleNav} to="/">
                What's New
              </Link>
            </li>
            <li className="nav-right">
              <Link onClick={this.toggleNav} to="/">
                Herald
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleNav} to="/">
                Getchell's
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleNav} to="/">
                Find Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default onClickOutside(Header)
