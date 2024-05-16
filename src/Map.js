import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import CSS file for styling

// Reset Leaflet's default icon URLs to fix the marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function LeafletMap() {
  // Coordinates for Devki Steel Mills (Athi River, Machakos)
  const devkiSteelMillsCoords = [-1.4450, 36.9888];

  return (
    <div className="map-container">
        <h2 className='header'>Locate Our Shop on the Map</h2>
      <MapContainer
        className="full-height-map"
        center={devkiSteelMillsCoords}
        zoom={15} // Adjust the zoom level to focus on the specific area
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {/* Marker for Nasyjma Autos */}
        <Marker position={devkiSteelMillsCoords}>
          <Popup>
            Nasyjma Autos
            <br />
            Devki Athi River, Machakos
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
