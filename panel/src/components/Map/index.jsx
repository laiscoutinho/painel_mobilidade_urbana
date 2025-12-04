import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import stoppedBus from "../assets/images/parado.png";
import maintenanceBus from "../assets/images/manutencao.png";
import operatingBus from "../assets/images/operando.png";

import { useEffect, useState } from "react";
import { getVeiculos } from "../../services/api";

export default function Map({ busca }) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const loadVehicles = async () => {
      const e = await getVeiculos(busca);

      const processed = e.data.map((vehicle) => {
        let iconUrl;

        switch (vehicle.status) {
          case "operando":
            iconUrl = operatingBus;
            break;
          case "manutenção": 
            iconUrl = maintenanceBus;
            break;
          case "parado":
            iconUrl = stoppedBus;
            break;
          default:
            iconUrl = operatingBus;
        }

        return {
          ...vehicle,
          icon: L.icon({
            iconUrl,
            iconSize: [23, 23],
            iconAnchor: [11, 23],
            popupAnchor: [0, -23]
          }),
        };
      });

      setVehicles(processed);
    };

    loadVehicles();
    const timer = setInterval(loadVehicles, 10000);
    return () => clearInterval(timer);
  }, [busca]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={[-3.75, -38.470]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {vehicles.map((v) => {
          if (!v.lat || !v.lng) return null;

          return (
            <Marker
              key={v.id}
              position={[v.lat, v.lng]} 
              icon={v.icon}
            >
              <Popup>
<<<<<<< HEAD
=======
                <strong>{v.prefixo}</strong><br />
                Id: {v.id}<br />
>>>>>>> 1e51ae2 (merge with main)
                Linha: {v.linha}<br />
                Status: {v.status}<br />
                Velocidade: {v.velocidade} km/h
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
