import React from 'react'
import img2 from "../../images/blog/article-thumbnails/smartcity-blog-image.png";
import "../../css/blogs/author.css";

// Author Component
const Author = ({img, name, title, summary}) => {
  return (
    <div className='Author-Card'>
        <div className='Author-Image-Container'>
            <img src={img} className='Author-Image'/>
        </div>
        <div className='Author-Info'>
            <h1 className='Authot-Name'>{name}</h1>
            <p className='Author-Title'>{title}</p>
            <p className='Author-Description'>{summary}</p>
        </div>
    </div>
  )
}
export default Author 