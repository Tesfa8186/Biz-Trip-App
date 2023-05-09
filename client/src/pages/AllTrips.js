
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import TripList from '../components/TripList';

const AllTrips = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>All Trips</h1>
      <TripList trips={trips} />
      
    </>
  );
};

export default AllTrips;
