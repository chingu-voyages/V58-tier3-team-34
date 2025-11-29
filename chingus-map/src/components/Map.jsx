import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Map({ countries }) {
  // Create marker with number
  const markerWithNumber = (members) =>
    L.divIcon({
      className: '',
      html: `
      <div class="relative w-11 h-11">
        <img
          src="../../src/assets/marker1.png"
          class="w-11 h-11"
        />
        <span class="absolute inset-0 -top-1/4 flex items-center justify-center text-black font-bold text-xs">
          ${members}
        </span>
      </div>
    `,
    });

  return (
    <div className='h-[600px] w-1-2'>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2} // Minimum one Map
        maxZoom={8}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1.0} // Fix position on border
        //worldCopyJump={false}
        className='h-full w-full'
      >
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          //noWrap={true} // No repeat map
        />

        {countries.map(({ country, members, lat, lng }) => (
          <Marker
            key={country}
            position={[lat, lng]}
            icon={markerWithNumber(members)}
          >
            <Popup>
              {country}
              <br />
              Members: {members}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
