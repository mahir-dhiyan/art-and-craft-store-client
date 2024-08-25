import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
    return (
            <>
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">Our <span className="text-[#C56652]">Flagship Store</span> Locator</h2>
            </div>
         <MapContainer className="h-96 z-0" center={[23.79394993389781, 90.4049625821915]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[23.79394993389781, 90.4049625821915]}>
    <Popup>
      Wooven Flagship Store
    </Popup>
  </Marker>
</MapContainer>
</>
    );
};

export default Map;