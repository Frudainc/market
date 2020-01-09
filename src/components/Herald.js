import React from 'react'

import { Button } from '.'
import { HeraldLogo, HeraldLine } from '../svg'

export default () => {
  return (
    <div className="herald">
      <div className="width">
        <div className="herald-columns">
          <div className="herald-left-column">
            <div className="herald-left-columns-content">
              <HeraldLogo />
              <HeraldLine />
              <p>
                A friendly cafe and modern marketplace, defined by and rooted in
                the communities that surround us. Now open for lunch &amp;
                dinner.
              </p>
              <Button to="/">Explore</Button>
            </div>
          </div>

          <div className="herald-right-column">
            <img src="/herald.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}
