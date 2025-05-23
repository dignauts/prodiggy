import { gql } from '@apollo/client';

export const GET_WHY_US_CARDS_QUERY = gql`
  query WhyUsCardsQuery {
    whyUsCards {
      description
      icon {
        url
      }
      id
      image {
        url
      }
      title
    }
  }
`;
