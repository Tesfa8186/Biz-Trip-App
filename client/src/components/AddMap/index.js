// components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AddMap = () => {
  const position = [51.505, -0.09]; // Sample coordinates (latitude, longitude)
  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
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


// // components/AddGoogleMap.js
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '100%',
// };

// const center = {
//   lat: 51.505,
//   lng: -0.09,
// };

// const AddGoogleMap = () => {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default AddGoogleMap;
