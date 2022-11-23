import React from 'react'
import "../../css/blogs/carousal.css";

// Carousal Component
const Carousal = ({data, setCarousal}) => {
    
    // Handle Carousal Selection
    const handleClick = (e) => setCarousal(e.target.id)

    return(
        <div className='Carousal-container'>
            {data[0].map((element, index) => 
                <div className='image-container'>
                    <button onClick={handleClick} className='carousal-button'> 
                        <img src={element.image} className='image' id={index} />
                    </button>
                </div>
            )}
        </div>
    )
}
export default Carousal