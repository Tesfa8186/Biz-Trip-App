
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


// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_TRIPS } from '../utils/queries';
// import TripList from '../components/TripList';

// const AllTrips = () => {
//   const [trips, setTrips] = useState([]);
//   const { loading, data } = useQuery(QUERY_TRIPS);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const handleDelete = (tripId) => {
//     setTrips((prevTrips) => prevTrips.filter((trip) => trip._id !== tripId));
//   };

//   return (
//     <>
//       <h1>All Trips</h1>
//       <TripList trips={data.trips} onDelete={handleDelete} />
//     </>
//   );
// };

// export default AllTrips;
