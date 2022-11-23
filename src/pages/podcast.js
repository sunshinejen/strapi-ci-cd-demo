import * as React from "react";
import "../css/main.css";
import Layout from "../components/layout";
import Podcast from "../components/podcast/podcastcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";

const PodcastPage = ({ location, data }) => {
    // podcast data
    const podcastData = []

    // Deconstruct Podcast Data
    data.allStrapiPodcast.edges.forEach(element => {
      podcastData.push({
        id:element.node.strapi_id,
        guestName: element.node.guest_name,
        guestTitle: element.node.guest_title,
        description: element.node.podcast_description,
        episode: element.node.podcast_episode,
        createdAt: element.node.flyer_img[0].createdAt,
        image_url:element.node.flyer_img[0].url,
        image_alt:element.node.flyer_img[0].caption,
        spotify:element.node.spotify_url,
        soundCloud: element.node.soundcloud_url,
        apple:element.node.applepodcast_url
      })
    })
    console.log(podcastData)
  return (
    <>
      <Layout location={location}>
        <Podcast podcastData={podcastData}/>
      </Layout>
    </>
  );
};

export default PodcastPage;

export const query = graphql`
query MyQuery {
  allStrapiPodcast(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        flyer_img {
          url
          createdAt(formatString: "yyyy")
          caption
        }
        guest_name
        applepodcast_url
        guest_title
        podcast_description
        podcast_episode
        soundcloud_url
        spotify_url
        strapi_id
      }
    }
  }
}`
