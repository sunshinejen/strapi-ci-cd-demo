import { graphql, useStaticQuery } from "gatsby";


export const useWebinarListingQuery = () => {
    const webinarQueryData = useStaticQuery(graphql`
    query MyQuery {
        allStrapiWebinar(sort: {order: DESC, fields: date}, limit: 1000) {
          edges {
            node {
              date(formatString: "dddd, MMMM DD, YYYY")
              webinar_title
              webinar_url
              time
              summary
              webinar_description
              registration_url
              id
            }
          }
        }
      }
    `
    );
    return webinarQueryData;
};






/** */