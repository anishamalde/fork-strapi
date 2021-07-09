import gql from 'graphql-tag';

const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
      welcomeText
    }
  }
`;

export default HOMEPAGE_QUERY;
