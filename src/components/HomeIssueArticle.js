import React from 'react'
import { Link } from 'gatsby'
import { NewItem } from '../svg'

export default ({ article }) => {
  const { title, slug, publishDate, heroImage } = article

  return (
    <div className="home-issue-article">
      <div className="home-issue-article-image">
        <img src={heroImage.file.url} />
      </div>
      <div className="home-issue-article-text">
        <NewItem />
        <h3>{title}</h3>
        <div className="home-issue-article-text-flex">
          <time>{publishDate}</time>
          <Link to={`/blog/${slug}`}>Read More</Link>
        </div>
      </div>
    </div>
  )
}
