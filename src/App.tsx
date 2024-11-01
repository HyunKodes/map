import type { Place } from './api/Place';
import { useState } from 'react';
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import markerIcon from '/icons/marker-icon.png';
// import markerIcon2x from '/icons/marker-icon-2x.png';
// import markerShadow from '/icons/marker-shadow.png';


// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place}/>
      </div>
    </div>
  );
}

export default App;
