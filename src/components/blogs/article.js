import React from "react";
// import "../../css/main.css";
import "../../css/blogs/article.css";
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "gatsby"

const Article = ({img, title, heading, author, content, date}) => {
    return (
        <div className='Article-Card'>
            {/* Article Image */}
            { img && <img src={img} className="Article-image" alt="..." />}

            <div className="Article-info">
                <h1 className="Article-author">{author}</h1>
                <h5 className="Article-title">{title}</h5>    
                <p className="Article-summary">{heading}</p>
                
                <Router>
                    <Link to='/articles' state={[{img, title, author, content : content, date}]} className="Article-link-button">
                        Read more
                    </Link>
                </Router>
            </div>
        </div>
    )
}
export default Article