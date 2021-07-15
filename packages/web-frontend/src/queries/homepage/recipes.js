import gql from 'graphql-tag';

const HOMEPAGE_RECIPES_QUERY = gql`
  query Recipes {
    recipes {
      slug
      title
      image {
        url
      }
    }
  }
`;

export default HOMEPAGE_RECIPES_QUERY;
