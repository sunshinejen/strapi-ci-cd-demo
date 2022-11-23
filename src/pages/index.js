import * as React from "react";
import Layout from "../components/layout";
import HomePage from "../components/index";
//import Carousel from "../components/home/carousel";
import { graphql } from "gatsby";
const functions = require('../module/functions');

const MainPage = ({ location, data }) => {
  console.log(data);
  const homePageStrapiData = data.allStrapiHome.edges;
  const hpComponentStrapiData = data.allStrapiHome.nodes;
  const buzzStrapiData = data.allStrapiBuzz.edges;



  /* Homepage content */
  const hpContainers = [];
  const buzzContainer = [];

  /*Images*/
  const homeSlideImages = [];
  const hpContainerImgs = [];
  const hpContainerWebinarImgs = [];
  const hpContainerPodcastImgs = [];



  const getHomePageData = () => {

    homePageStrapiData.forEach(edge => {
      const object = edge.node.slides;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      homeSlideImages.push({
        slides: property,
      });
    });

    homePageStrapiData.forEach(edge => {
      const object = edge.node.container_img;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      hpContainerImgs.push({
        containerImg: property,
      });
    });


    homePageStrapiData.forEach(edge => {
      const object = edge.node.webinar_container_images;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      hpContainerWebinarImgs.push({
        webinarImgs: property,
      });
    });

    homePageStrapiData.forEach(edge => {
      const object = edge.node.podcast_container_images;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      hpContainerPodcastImgs.push({
        podcastImgs: property,
      });
    });

  };

  const getHomePageContainers = () => {
    const containers = hpComponentStrapiData[0].container;
    containers.forEach(edge => {
      const object = edge;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      hpContainers.push(property);
    });
  };

  const getBuzzSeriesSection = () => {
    buzzStrapiData.forEach(edge => {
      const object = edge.node;
      const properties = Object.keys(object);
      let property = functions.addObjects(object, properties);
      buzzContainer.push(property);
    });

  }

  getHomePageData();
  getHomePageContainers();
  getBuzzSeriesSection();

  console.log(buzzContainer, 'buzz container');


  return (
    <>
      <Layout location={location}>
        <HomePage
          homePageData={hpContainers}
          buzzContainer={buzzContainer}
          slideData={homeSlideImages}
          whoWeAreImg={hpContainerImgs}
          webinarImgs={hpContainerWebinarImgs}
          podcastImgs={hpContainerPodcastImgs}
        />
      </Layout>
    </>
  );
};

export default MainPage;

export const homePageQuery = graphql`
query homePageQuery {
  allStrapiHome {
    edges {
      node {
        container_img {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
          alternativeText
          id
          url
        }
        podcast_container_images {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
          alternativeText
          id
          url
        }
        webinar_container_images {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
          alternativeText
          id
          url
        }
        slides {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
          url
          alternativeText
        }
      }
    }
    nodes {
      container {
        container_content
        container_subtitle
        container_title
        id
      }
    }
  }
  allStrapiBuzz(
    limit: 3
    filter: {category: {eq: "speakers"}}
  ) {
    edges {
      node {
        name
        review {
          data {
            review
          }
        }
        img {
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
          alternativeText
          url
        }
        category
        id
      }
    }
  }
}
`