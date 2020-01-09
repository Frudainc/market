import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <iframe
          src="https://snazzymaps.com/embed/210626"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <div className="footer-right">
        <div className="footer-right-top">
          <div className="footer-columns">
            <ul className="footer-column">
              <li>
                <Link to="/">About Market</Link>
              </li>
              <li>
                <Link to="/">Directions</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>

            <ul className="footer-column">
              <li>@marketbymacys on</li>
              <li>
                <a href="https://instgram.com/marketbymacys">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com/marketbymacys">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/marketbymacys">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-right-bottom">
          <p>&copy;2020 Market by Macy's</p>
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
