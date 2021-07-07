import gql from 'graphql-tag';

const RECIPES_QUERY = gql`
  query Recipes {
    recipes {
      slug
      title
      description
      cookingTime
      category {
        slug
        name
      }
      image {
        url
      }
    }
  }
`;

export default RECIPES_QUERY;
