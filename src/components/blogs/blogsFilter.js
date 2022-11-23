import React from 'react'
import "../../css/podcast/podcast_filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTh, faListUl} from "@fortawesome/free-solid-svg-icons";
import "../../css/blogs/blogsFilter.css";

// Blogs filter component
const BlogsFilter = ({setFilterData}) => {

    // Toggle Blogs view
    const toggleBlogsView = (e)=> {
        const {name, id} = e.currentTarget
        setFilterData(data => ({
            ...data,
            [name]:id
        }))
    }

    // Handle search by year filter submissions
    const handleSearchByYearFilter = (e) => {
        const {name, value} = e.target
        setFilterData(data => ({
            ...data,
            [name]:value
        }))
    }

  return (
    <div className="row align-items-end filter-container">
        <div className="col">
            <h5 className='bts'>Latest Articles</h5>
        </div>

        <div className="col d-flex justify-content-end">
            {/* Thumbnail button */}
            <button onClick={toggleBlogsView} className="btn" 
                id="thumbNail" type='button' name='gridView'  
                data-testid='thumbnail-icon'>
                <FontAwesomeIcon icon={faTh} />
            </button>
            
            {/* List view Button */}
            <button onClick={toggleBlogsView} className="btn" 
                id="list" type='button' name='gridView'
                data-testid='list-view-icon'>
                <FontAwesomeIcon icon={faListUl} />
            </button>
            
            {/* Search by year filter */}
            <form onChange={handleSearchByYearFilter} >

                <select className="btn dropdown-toggle" type='button' name='searchByYear' data-testid='searchByYear-form'>
                    <option defaultValue className='option' 
                        data-testid='select-option'>Search By Year</option>
                    <option value="all" data-testid='select-option' >All</option>
                    <option value="2022" data-testid='select-option'>2022</option>
                    <option value="2021" data-testid='select-option'>2021</option>
                </select>
            </form>
        
        </div>
    </div>
  )
}
export default BlogsFilter