import React from 'react'
import "../../css/blogs/fullArticle.css";
import ReactMarkdown from 'react-markdown'

// Full Article Page Component
const FullArticlepage = ({title, img, content, author, date}) => {

  return (
    <div className='Full-Article-container'>
      <img className='Full-Article-image' src={img}/>
      <h1 className='Full-Article-title'>{title}</h1>
      <p className='Full-Article-author'>{author} <p className='publish-date'>{date}</p> </p>
      <ReactMarkdown className='Full-Article-content'>{content}</ReactMarkdown>
    </div>
  )
}
export default FullArticlepage