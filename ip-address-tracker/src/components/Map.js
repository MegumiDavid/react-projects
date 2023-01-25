import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { IpContext } from '../IpContext'

const Map = () => {

  const [ipSearch] = useContext(IpContext)
  const [position, setPosition] = useState([51.505, -0.09])

  useEffect(() => {
    newPosition()
  },[ipSearch])

  const newPosition = () => {
    if (ipSearch.location) {
      setPosition([ipSearch.location.lat, ipSearch.location.lng])
    }
  }
  
  return (
    <MapContainer className='map' zoomControl={false} center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Your IP Address Localization
      </Popup>
    </Marker>
    <RecenterAutomatically lat={position[0]} lng={position[1]} />
  </MapContainer>
  )
}

export default Map

const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
   useEffect(() => {
     map.setView([lat, lng]);
   }, [lat, lng]);
   return null;
 }