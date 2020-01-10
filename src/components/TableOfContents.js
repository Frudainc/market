import React from 'react'

const items = [
  { width: '290px' },
  { width: '270px' },
  { width: '160px' },
  { width: '160px' },
  { width: '180px' },
  { width: '270px' },

  { width: '180px' },
  { width: '170px' },
]

export default () => {
  return (
    <div className="table-of-contents">
      <div className="width">
        <div className="table-of-contents-text">
          <h2>Table of Contents</h2>
          <p>
            Our top picks of the week. Come join us at the Market to see for
            yourself.
          </p>
        </div>

        <div className="table-of-contents-items">
          {items.map((item, i) => (
            <div
              key={i}
              className={`table-of-contents-item table-of-contents-item-${i +
                1}`}
            >
              {/* <span>{i + 1}</span>
              <img src={`/toc-${i + 1}.jpg`} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
