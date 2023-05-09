import React, {useState, useEffect} from "react";
import "./MapComponent.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {lookForFarms} from "../../services/farmService"

import { Icon, divIcon, point } from "leaflet";
import { all } from "axios";

// markers

const markerIcon = new L.Icon({
  iconUrl: ("https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const ComponentText = () => {
  return (<div>HOla</div>)
}

//Fill markers with farms
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];

export default function App() {
  const [farms, setFarms] = useState([])

  useEffect(() => {
    getFarms()
  }, [])

  const getFarms = async() => {
    const allFarms = await lookForFarms()
    setFarms(allFarms)
    console.log(allFarms)
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup><ComponentText/></Popup>
      </Marker>
    )
  }

  function markAllFarms() {
    const thisFarms = farms.filter(farm => farm.longitude !== null)
    return thisFarms.map((farm) => {
      return <Marker position={[farm.latitude, farm.longitude]}>
        <Popup>{farm.name}</Popup>
      </Marker>
    })
  }
  


  return (
    <>
   <MapContainer center={[28.14144, -15.43001]} zoom={18}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstretmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker/>
      {markAllFarms()}
    </MapContainer>
    
    <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" >
            Locate Me 
          </button>
        </div>
      </div>
    </>
 
  );
}
