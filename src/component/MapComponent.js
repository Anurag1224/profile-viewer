import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {GOOGLE_MAP_API_KEY} from "../utils/constant";

const libraries = ['marker'];

const MapComponent = ({ address }) => {
  
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: address.lat, 
    lng: address.lng, 
  };

  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY, 
    libraries,
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const map = mapRef.current;
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const marker = new AdvancedMarkerElement({
        position: center,
        map: map,
        title: 'Hii',
        
      });

      return () => {
        marker.setMap(null); 
      };
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => (mapRef.current = map)}
        >
      <Marker 
          position={center}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }}
        />
      
      </GoogleMap> 
         
       
    </div>
  );
};

export default MapComponent;