import gql from 'graphql-tag';

const CATEGORY_RECIPES_QUERY = gql`
  query Category($slug: String!) {
    categories(where: { slug: $slug }) {
      name
      recipes {
        slug
        title
        cookingTime
        description
        image {
          url
        }
        category {
          slug
          name
        }
      }
    }
  }
`;

export default CATEGORY_RECIPES_QUERY;
