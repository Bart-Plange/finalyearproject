import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Tooltip } from 'react-leaflet';
import { useState, useMemo } from 'react';

const TowingMap = () => {
  const center = [5.614818, -0.205874];

  function TooltipCircle() {
    const [clickedCount, setClickedCount] = useState(0);
    const eventHandlers = useMemo(
      () => ({
        click() {
          setClickedCount((count) => count + 1);
        },
      }),
      []
    );

    const clickedText =
      clickedCount === 0
        ? 'Click this Circle to change the Tooltip text'
        : `Circle click: ${clickedCount}`;

    return (
      <Circle
        center={center}
        eventHandlers={eventHandlers}
        pathOptions={{ fillColor: 'blue' }}
        radius={200}
      >
        <Tooltip>{clickedText}</Tooltip>
      </Circle>
    );
  }

  return (
    <div className='container text-gray-200 p-4'>
      <p className="text-green-600 pb-12 mx-auto text-2xl">Towing map</p>

      <div id="map" className='h-3/4 w-3/4 p-4 m-4'>
        <MapContainer center={center} zoom={13}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mr. Garage : Map</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TooltipCircle />
          <CircleMarker
            center={[5.6698, -0.01657]}
            pathOptions={{ color: 'red' }}
            radius={20}
          >
            <Tooltip>Tooltip for CircleMarker</Tooltip>
          </CircleMarker>
          <Marker position={[5.614818, -0.205874]}>
            <Popup>Popup for Marker</Popup>
            <Tooltip>Tooltip for Marker</Tooltip>
          </Marker>

          
        </MapContainer>
      </div>
    </div>
  );
};

export default TowingMap;

