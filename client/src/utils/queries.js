import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const QUERY_TRIPS = gql`
  query allTrips {
    trips {
      _id
      firstName
      lastName
      fromDateTime
      toDateTime
      managerName
      approved
      path { 
        name
        lat
        lon
      }
    }
  }
`;