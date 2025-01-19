
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



const MapComponent = ({address}) => {

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };
  
  const center = {
    lat: 40.7128, // Latitude for New York
    lng: -74.0060, // Longitude for New York
  };

  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
      <LoadScript googleMapsApiKey="AIzaSyAZPIYaXoLVmtTYyuvcQ5H1d7SKZjmKIMI">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );

};

export default MapComponent;

