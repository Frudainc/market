import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

export default ({ children, className, to, href, type, ...rest }) => {
  const cls = classNames('button', className)

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  } else if (href) {
    return (
      <a to={to} className={cls}>
        {children}
      </a>
    )
  } else {
    return (
      <Button type={type || 'button'} className={cls} {...rest}>
        {children}
      </Button>
    )
  }
}
