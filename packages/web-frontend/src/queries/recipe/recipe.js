import gql from 'graphql-tag';

const RECIPE_QUERY = gql`
  query Recipe($slug: String!) {
    recipes(where: { slug: $slug }) {
      slug
      title
      method
      ingredients
      cookingTime
      servingSize
      calories
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

export default RECIPE_QUERY;
