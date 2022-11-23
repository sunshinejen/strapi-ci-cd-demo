import React, {useState, useEffect} from "react";
import "../../css/blogs/blogs.css";
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "gatsby"
import Article from './/article'
import Selector from './/selector'
import Author from './/author'
import BlogsFilter from './/blogsFilter'
import Carousal from './/carousal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";


// Blogs Component
const Blogs = ({blogsData, authorsData}) => {
    // Blogs data
    const [blogs, setBlogs] = useState(blogsData)

    // Maintain copy of blogs data.
    const [blogsCopy, setBlogsCopy] = useState(blogs)

    // Toggle blogs and authors.
    const [BlogsAndAuthors, SetBlogsAndAuthorsToggle] = useState('blogs')

    // Filtering data State 
    const [filterData, setFilterData] = useState({gridView: 'thumbNail', searchByYear: 'Search By Year'})

    // Re-render page if Blogs and Author Toggled
    useEffect(() => {
    }, [BlogsAndAuthors])

    // carousal data
    const [carousal, setCarousal] = useState([blogsData.slice(0, 4)])

    // Selected carousal
    const [selectedCarousal, setSelectedCarousal] = useState(0)

    // Toggle More button
    const [toggleMore, setTogglemore] = useState(false)
    const handleMoreButton = () => {
        if(toggleMore === false) {
            setTogglemore(true)
            setFilterData(data => ({
                ...data,
                searchByYear:'all'
            }))
        }else {
            setTogglemore(false)
            setFilterData(data => ({
                ...data,
                searchByYear:'Search By Year'
            }))
        }
    }

    // Filter Blogs by user input.
    useEffect(() => {
            if(filterData.searchByYear === 'Search By Year'){
                setBlogs(blogsCopy.slice(0, 7))
            }else if (filterData.searchByYear === 'all'){
                setBlogs([...blogsCopy])
            } else{
                const output = blogsCopy.filter(item => item.publishDate.slice(-4) === filterData.searchByYear)
                setBlogs(output)
            }
    }, [filterData.searchByYear])
    
    return (
        <div className="Blogs-container">

            <div className="container">
                <section className="Blogs-Spotlight">
                        <div className="Blogs-Spotlight-info">
                            <h1 className="Blogs-Spotlight-Author">{carousal[0][selectedCarousal].author}</h1>
                            <p className="Blogs-Spotlight-Title">{carousal[0][selectedCarousal].title}</p>
                            <p className="Blogs-Spotlight-Description">{carousal[0][selectedCarousal].heading}</p>

                            <Router>
                                <Link to='/articles' 
                                    state={[
                                    {img: carousal[0][selectedCarousal].image, 
                                    title : carousal[0][selectedCarousal].title, 
                                    author: carousal[0][selectedCarousal].author, 
                                    content : carousal[0][selectedCarousal].content, 
                                    date: carousal[0][selectedCarousal].publishDate}]} 
                                    className='Blogs-Spotlight-Link'>
                                    read More
                                </Link>
                            </Router>
                        </div>

                        <div className="blogs-Spotlight-image-container">
                           <img className="blogs-Spotlight-image" src={carousal[0][selectedCarousal].image}/>
                        </div>
                </section>

                {/* Carousal Component */}
                < Carousal data={carousal} setCarousal={setSelectedCarousal}/>
            </div>

            <section className="Blogs-Articles-Container"> 
                <div className="container">
                    {/* Article & Author Selector*/}
                    <Selector BlogsAndAuthors={BlogsAndAuthors} 
                    SetBlogsAndAuthorsToggle={SetBlogsAndAuthorsToggle}/>
                    
                    {/* Blogs Filter */}
                    <BlogsFilter setFilterData={setFilterData}/>

                    {/* Display Blogs If Selected */}
                    {BlogsAndAuthors === 'blogs' ? 

                        filterData.gridView === 'thumbNail' ? 
                            // Thumbnal view
                            <div className="Articles-ThumbNail-View">
                                {blogs.map(blog => 
                                    <Article img={blog.image} 
                                    title={blog.title} 
                                    heading={blog.heading} 
                                    content={blog.content} 
                                    author={blog.author}
                                    date={blog.publishDate}
                                    />
                                )} 
                            </div>
                        : 
                            // List View
                            <ul className="list-view-elements">
                                {blogs.map(blog => 
                                    <li className="list-article-element">
                                        <Router>
                                            <Link to='/articles' className='list-element-link'
                                                state={[{img: blog.image, title : blog.title, 
                                                    author: blog.author, content : blog.content, 
                                                    date: blog.publishDate}]}>
                                                    {blog.title}
                                            </Link>
                                        </Router>
                                    </li>
                                )}
                            </ul>
                            
                    : 
                    // Display Authors If selected
                        <div className="Authors-Container">
                            {authorsData.map(author => 
                                <Author 
                                    img={author.image} 
                                    name={author.name} 
                                    title={author.title} 
                                    summary={author.summary}/>
                            )}
                        </div>
                    }

                </div>

                {/* Display More Button */}
                <div className="More-Button-container">
                    <button className="More-Button" onClick={handleMoreButton}> More </button>
                    {toggleMore === false ? 
                        <FontAwesomeIcon icon={faChevronDown} className='More-icon'/>
                    : 
                        <FontAwesomeIcon icon={faChevronUp} className='More-icon'/>
                    }
                </div>

            </section>
        </div>
    ) 
}
export default Blogs