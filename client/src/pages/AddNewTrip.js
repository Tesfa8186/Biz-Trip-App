import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../utils/mutations';
import AddTrip from '../components/AddTrip';
import { useNavigate } from 'react-router-dom';

import '../styles/AddNewTrip.css'; // Import the CSS file here

const AddNewTrip = () => {
  const navigate = useNavigate();
  const [addTrip] = useMutation(ADD_TRIP);

  const handleAddTripSubmit = async (newTrip) => {
    console.log('handleAddTripSubmit', newTrip); // Added console log
    try {
      await addTrip({
        variables: {
          firstName: newTrip.firstName,
          lastName: newTrip.lastName,
          fromDateTime: newTrip.fromDate,
          toDateTime: newTrip.toDate,
          managerName: newTrip.manager,
          approved: newTrip.approved,
          path: [], // Add the path variable here
        },
      });

      navigate('/alltrips');
    } catch (error) {
      console.error('Error adding trip:', error);
    }
  };

  return (
    <div>
      <h2 className="titleStyle">Add New Trip</h2>
      <AddTrip onSubmit={handleAddTripSubmit} />
    </div>
  );
};

export default AddNewTrip;
