import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TRIP } from '../utils/queries'; // Import the GET_TRIP query
import EditTrip from '../components/EditTrip';



const UpdateTrip = () => {
  const { id } = useParams(); // Get the trip ID from the URL
  const { loading, error, data } = useQuery(GET_TRIP, {
    variables: { tripId: id },
  });


  const handleEditTripSubmit = (updatedTrip) => {
    // Handle the submit action from the EditTrip component
    // E.g., navigate back to the trip list or show a success message
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Update Trip</h2>
      <EditTrip trip={data.trip} onSubmit={handleEditTripSubmit} />
    </div>
  );
};

export default UpdateTrip;





// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_TRIPS } from '../utils/queries';
// import EditTrip from '../components/EditTrip';

// const UpdateTrip = () => {
//   const { loading, data } = useQuery(QUERY_TRIPS);
//   const trips = data?.trips || [];

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {/* <h1>Edit Trip</h1> */}
//       {<EditTrip trips={trips} />}
      
//     </>
//   );
// };

// export default UpdateTrip;
