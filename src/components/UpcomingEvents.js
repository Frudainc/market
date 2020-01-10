import React from 'react'
import { Link } from 'gatsby'

import { UpcomingEvent } from '.'
import { UpcomingEventsArrow, Star } from '../svg'

export default () => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <UpcomingEvent />
      <UpcomingEvent />
      <UpcomingEvent />
      <UpcomingEvent />

      <Link className="upcoming-events-more" to="/">
        <span>View all events</span>
        <UpcomingEventsArrow />
      </Link>

      <Star className="upcoming-events-star" />
    </div>
  )
}
