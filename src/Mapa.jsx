import React from "react";
import { MapContainer, Marker } from "react-leaflet";
import { useEffect } from "react";
import { TileLayer} from "leaflet";

const Mapa = () => {
  //const ubicacion = [20.101, 0.10];
  const [datos, setDatos] = useEffect([]);

  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => setMarket(data))
      .catch((error) => console.log("error al leer", error));
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={6} style={{height: '500px'}} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>

      {datos.map((dato) => (
        <Marker
          key={dato.id}
          position={[dato.longitud, dato.latitud]}>
          
          <Popup>{dato.detalle}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
 export default Mapa;