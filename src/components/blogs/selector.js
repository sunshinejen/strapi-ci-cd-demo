import React from "react";
import "../../css/blogs/selector.css";

// Blogs and Author Selector Component.
const Selector = ({BlogsAndAuthors, SetBlogsAndAuthorsToggle}) => {
    
    // Handle Blogs and Authors Toggle
    const handleToggle = (e) => {
        if (e.target.value === 'blogs'){
            if(BlogsAndAuthors === 'authors'){
                SetBlogsAndAuthorsToggle('blogs')
            }
        }else{
            if(BlogsAndAuthors === 'blogs'){
                SetBlogsAndAuthorsToggle('authors')
            }
        }
    }

    return (
        <div className="Article-and-author-selector-container">
            <div className={ BlogsAndAuthors === 'blogs' ? "latest-article-container" : null}>
                <button className="latest-articles" onClick={handleToggle} value='blogs'>Latest Articles</button>
            </div>
            <div className={BlogsAndAuthors === 'authors' ? "author-container" : null} >
                <button className="authors" onClick={handleToggle} value='authors'>Authors</button>
            </div>
        </div>
    )
}
export default Selector