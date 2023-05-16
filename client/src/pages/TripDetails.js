import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import AddTrip from '../pages/AddNewTrip';

const TripDetails = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <h1>All Trips</h1> */}
      <AddTrip trips={trips} />
      
    </>
  );
};

export default TripDetails;
