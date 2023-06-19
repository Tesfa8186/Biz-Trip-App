import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SetViewOnClick = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords, map]);

  return null;
}

const AddMap = () => {
  const position = [51.505, -0.09]; 
  
  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
      <SetViewOnClick coords={position} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A sample popup <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AddMap;

