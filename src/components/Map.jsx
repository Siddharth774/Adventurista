import { useNavigate } from "react-router-dom";
// import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import User from "./User";

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export default function Map() {
  // eslint-disable-next-line no-unused-vars
  const [mapPosition, setMapPosition] = useState([26.449896, 74.639915]);
  const { cities } = useCities();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) {
        setMapPosition([mapLat, mapLng]);
      }
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <User />
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition
            ? "Fetching current location..."
            : "Use  Current Location"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        // center={[mapLat, mapLng]}
        zoom={7}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
          // attribution="&copy; NASA Blue Marble, image service by OpenGeo"
          // maxNativeZoom={8}
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{flagemojiToPNG(city.emoji)}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        {/* <ChangeCenter position={[mapLat || 26.449896, mapLng || 74.639915]} /> */}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>

      {/* <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1> */}
    </div>
  );

  function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({
      click: (e) =>
        // console.log(e);
        navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
  }

  // eslint-disable-next-line react/prop-types
  function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
  }
}
