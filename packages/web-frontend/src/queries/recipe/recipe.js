import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

function useRecipeQuery(args) {
  const { loading, error, data } = useQuery(RECIPE_QUERY, {
    ...args,
  });
  return {
    data,
    loading,
    error,
  };
}
export { useRecipeQuery, RECIPE_QUERY };
