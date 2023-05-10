import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import EditTrip from '../components/EditTrip';

const UpdateTrip = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <h1>Edit Trip</h1> */}
      {<EditTrip trips={trips} />}
      
    </>
  );
};

export default UpdateTrip;
