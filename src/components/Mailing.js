import React, { Component } from 'react'
import { LongArrow } from '../svg'

export default class Mailing extends Component {
  state = {
    email: '',
  }

  handleInput = e => {
    this.setState({
      email: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    alert(this.state.email)
  }

  render() {
    const { email } = this.state

    return (
      <div className="mailing">
        <div className="width">
          <form className="mailing-form" onSubmit={this.handleSubmit}>
            <div className="mailing-fields">
              <input
                type="email"
                placeholder="Join our mailing list"
                onChange={this.handleInput}
                value={email}
              />
              <button type="submit">
                <LongArrow />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
