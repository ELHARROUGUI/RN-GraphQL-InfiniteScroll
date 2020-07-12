import gql from "graphql-tag";

export const COUNTRY = gql`
  query COUNTRY($first: Int, $offset: Int) {
    Country(first: $first, offset: $offset) {
      _id
      name
      flag {
        _id
        emoji
        svgFile
      }
    }
  }
`;

export default {
  COUNTRY,
};
