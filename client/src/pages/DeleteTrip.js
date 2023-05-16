import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import { REMOVE_TRIP } from '../utils/mutations';

const DeleteTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refetch } = useQuery(QUERY_TRIPS, { skip: true });
  const [deleteTrip] = useMutation(REMOVE_TRIP);

  useEffect(() => {
    const handleDelete = async () => {
      await deleteTrip({ variables: { tripId: id } });
      await refetch(); // refetch the list of trips
      navigate('/alltrips');
    };

    handleDelete();
  }, [deleteTrip, id, navigate, refetch]);

  return (
    <div>
      <p>Deleting trip...</p>
    </div>
  );
};

export default DeleteTrip;
