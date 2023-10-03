import React from 'react';
import { GoogleMap, LoadScript, Marker, GoogleMapProps } from '@react-google-maps/api';

interface TowingMapProps {
  center: GoogleMapProps['center'];
  zoom: GoogleMapProps['zoom'];
  markers: { position: { lat: number; lng: number } }[];
}

const TowingMap: React.FC<TowingMapProps> = ({ center, zoom, markers }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyDSiesrcC1czVEVroni4MBbDwty9II5DQg'>
      <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={zoom}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default TowingMap;
