import React from 'react'
import './blogItem.css'

const blogItem = ({ title, content, author, date, category}) => {
  return (
    <div className='blog-item'>
        <h2>{title}</h2>
        <p className='blog-item-content'>{content}</p>
        <div className="blog-item-meta">
          <span>Yazar: {author}</span>
          <span>Tarih: {date}</span>
          <span className='blog-item-categor'>{category}</span>
          </div>
    </div>
  )
}

export default blogItem