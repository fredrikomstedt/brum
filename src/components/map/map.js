import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import styles from './map.module.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoieGFyaWwiLCJhIjoiY2pwYTEyaGdiMDAxbzNzbWx5enAwdm9rOSJ9.7eZF_wXP5rnEMZRG_JmkYw';

const Map = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) {
            return;
        }

        // Create map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [props.lng, props.lat],
            zoom: props.zoom,
        });

        // Add navigation controls (rotation, zoom)
        map.current.addControl(new mapboxgl.NavigationControl());
    });

    return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default Map;
