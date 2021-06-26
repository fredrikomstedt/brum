import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { useState, useEffect, useRef } from 'react';
import { getPriceFromDistance } from 'utils/utilityFunctions';

import styles from './map.module.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoieGFyaWwiLCJhIjoiY2pwYTEyaGdiMDAxbzNzbWx5enAwdm9rOSJ9.7eZF_wXP5rnEMZRG_JmkYw';

const Map = (props) => {
    const { isRoundTrip, costPerMile, setCost, setMapError, home, zoom } =
        props;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [distance, setDistance] = useState(null);

    const findDistance = async (directions) => {
        const origin = directions.getOrigin().geometry.coordinates;
        const destination = directions.getDestination().geometry.coordinates;

        //Request the route data from MapBox
        try {
            const response = await fetch(
                'https://api.mapbox.com/directions/v5/mapbox/driving/' +
                    origin[0] +
                    ',' +
                    origin[1] +
                    ';' +
                    destination[0] +
                    ',' +
                    destination[1] +
                    '.json?access_token=' +
                    mapboxgl.accessToken
            );
            const data = await response.json();
            const route = data.routes.find((route) => route !== undefined);
            if (route) {
                setDistance(route.distance);
                setMapError(null);
            } else {
                setMapError('No route found');
                setDistance(null);
            }
        } catch (error) {
            setMapError('Something went wrong when creating a route');
            setDistance(null);
        }
    };

    useEffect(() => {
        if (!distance) {
            return;
        }

        let cost = getPriceFromDistance(distance, costPerMile);
        cost *= isRoundTrip ? 2 : 1;
        setCost(cost);
        setMapError(null);
    }, [isRoundTrip, costPerMile, distance, setCost, setMapError]);

    useEffect(() => {
        if (map.current) {
            return;
        }

        // Create map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [home.lng, home.lat],
            zoom: zoom,
        });

        // Add navigation controls (rotation, zoom)
        map.current.addControl(new mapboxgl.NavigationControl());

        //Add direction handling
        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            controls: {
                instructions: false,
                profileSwitcher: false,
            },
        });
        map.current.addControl(directions, 'top-left');

        //Set the starting point to be the home of the car
        directions.setOrigin(home.address);

        //Each new route should result in the app calculating the price
        directions.on('route', () => {
            findDistance(directions);
        });
    });

    return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default Map;
