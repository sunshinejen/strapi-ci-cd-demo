import React, {useState, useEffect} from "react";
import "../../css/podcast/podcast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PodcastCard from './/Podcast_card'
import PodcastLinks from './/Podcast_links'
import PodcastFilter from './/Podcast_filter'
import PodcastHelpers from './/helpers'

// Podcasts component
const Podcast = ({podcastData}) => {
  // Maintain podcast data in state
  const [podcast, setPodcast] = useState(podcastData)
  // copy of podcast data in state
  const [podcastCopy] = useState(podcastData)

  // Filtering data 
  const [filterData, setFilterData] = useState({gridView: 'thumbNail', searchByYear: 'Search By Year'})

  // Spotlight podcast data
  const spotlightData  = podcast[0]

  // latest podcast list
  const [podcastList, setPodcastList] = useState(podcast.slice(1, 7))

  // filter podcast
  useEffect(() => {
    PodcastHelpers.filter(filterData.searchByYear, setPodcast, podcastCopy, setPodcastList)
  }, [filterData.searchByYear])

  return (
    <div className="podcast-container">

      {/* Spotlight Section */}
      <section className="spotlight" >
        <div className="container">
          {spotlightData ? // error handling, no podcast data.
            <div className="podcast-spotlight-containers" >
              <div className="podcast-spotlight-image-container">
                <img className="introimg img-fluid mb-3 mb-lg-0 rounded" 
                  src={spotlightData.image_url}
                  alt={spotlightData.image_alt} />
              </div>
              <div className="grid-item-spotlight">
                <PodcastCard className='spotlight-card'
                  guestName={spotlightData.guestName}
                  description={spotlightData.description}
                  guestTitle={spotlightData.guestTitle}
                  Links={{
                    className:'spotlight-card-links',
                    soundCloud:spotlightData.soundcloud,
                    spotify:spotlightData.spotify,
                    podcasts:spotlightData.apple
                  }}
                  />
              </div>
            </div>
           : 
           <h1 className="spolight-no-data-msg">There are no podcast to display </h1>}
        </div>
      </section>
      
      {/* Latest Podcast section */}
      <section className="latest-Podcasts">
        <div className="container">

          {/* Podcast filter Component */}
          <PodcastFilter setFilterData={setFilterData}/>

          {podcastList.length > 0 ? // error handling, no podcast data.
            filterData.gridView === 'thumbNail' ? // Display Thumbnail view
              <section className="podcast-grid">
                <div className="wrapper">
                  {podcastList.map(podcast => 
                    <div className="grid-item" key={podcast.id}> 
                      < PodcastCard
                        img={podcast.image_url}
                        guestName={podcast.guestName}
                        description={podcast.description}
                        guestTitle={podcast.guestTitle}
                        Links={{
                          soundCloud:podcast.soundcloud,
                          spotify:podcast.spotify,
                          podcasts:podcast.apple
                        }}                
                      />
                    </div>)
                  }       
                </div>
              </section>

            :  // Dsiplay list view
              <section className="podcast-grid">
                <ul>
                  {podcastList.map(podcast => 
                    <li key={podcast.id} className='podcast-list-view-li'> 
                      Harvard in Tech Seattle Podcast Episode {podcast.episode} - {podcast.guestName}

                      < PodcastLinks 
                        className='podcast-list-view'
                        soundCloud={podcast.soundcloud} 
                        spotify={podcast.spotify}
                        podcasts={podcast.applepodcast}
                      /> 
                    </li>)
                  }
                </ul>
              </section>
          :<h1 className="spolight-no-data-msg">There are no podcast created in {filterData.searchByYear}</h1>
          }
        </div>
      </section>
    </div>
  );
};
export default Podcast;