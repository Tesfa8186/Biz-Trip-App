const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    firstName: String
    lastName: String
    email: String
    password: String
    jobTitle: String
    skills: [String]!
  }

  type Trip {
    _id: ID
    firstName: String
    lastName: String
    fromDateTime: String
    toDateTime: String
    path: [TripWayPoint]
    managerName: String
    approved: Boolean
  }

  type TripWayPoint {
    _id: ID
    name: String
    lon: Float
    lat: Float
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    trips: [Trip]!
    trip(tripId: ID!): Trip
    tripWayPoints: [TripWayPoint]!
    tripWayPoint(tripWayPointId: ID!): TripWayPoint
    userTrips(userId: ID!): [Trip]!
  }

  type Mutation {
    addProfile(name: String!, firstName: String!, lastName: String!, email: String!, password: String!, jobTitle: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addTrip(firstName: String!, lastName: String!, fromDateTime: String!, toDateTime: String!, managerName: String!, approved: Boolean!, path: [ID]!): Trip
    updateTrip(tripId: ID!, firstName: String, lastName: String, fromDateTime: String, toDateTime: String, managerName: String, approved: Boolean, path: [ID]): Trip
    removeTrip(tripId: ID!): Trip

    addTripWayPoint(name: String!, lon: Float!, lat: Float!): TripWayPoint
    updateTripWayPoint(tripWayPointId: ID!, name: String, lon: Float, lat: Float): TripWayPoint
    removeTripWayPoint(tripWayPointId: ID!): TripWayPoint
  }
`;

module.exports = typeDefs;
