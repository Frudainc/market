import React from 'react'

export default () => {
  let date = new Date().toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="info-bar">
      <div className="width">
        <div className="info-bar-inner">
          <time className="info-bar-section">{date}</time>
          <address className="info-bar-section">
            321 State st, South Lake, TX
          </address>
          <time className="info-bar-section">Open Today 10AM — 8PM</time>
        </div>
      </div>
    </div>
  )
}
