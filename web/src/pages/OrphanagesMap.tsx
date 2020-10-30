import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapIcon from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

const mapIconMarker = leaflet.icon({
  iconUrl: mapIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapIcon} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Canindé</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map
        center={[-4.3494849,-39.310245]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker
          icon={mapIconMarker}
          position={[-4.351474, -39.314320]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Criança Esperança
            <Link to="/orphanage/1">
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;
