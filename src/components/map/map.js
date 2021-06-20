import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { useEffect, useRef } from 'react';

import styles from './map.module.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoieGFyaWwiLCJhIjoiY2pwYTEyaGdiMDAxbzNzbWx5enAwdm9rOSJ9.7eZF_wXP5rnEMZRG_JmkYw';

const Map = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

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
                return [route.distance, null];
            }
            return [null, 'No route found'];
        } catch (error) {
            console.error(error);
            return [null, 'Something went wrong when creating a route'];
        }
    };

    const getPriceFromDistance = (distance) => {
        const distanceInSwedishMiles = distance / 10000;
        const cost =
            distanceInSwedishMiles *
            props.costPerMile *
            (props.isRoundTrip ? 2 : 1);
        return cost;
    };

    useEffect(() => {
        if (map.current) {
            return;
        }

        // Create map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [props.home.lng, props.home.lat],
            zoom: props.zoom,
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
        directions.setOrigin(props.home.address);

        //Each new route should result in the app calculating the price
        directions.on('route', () => {
            findDistance(directions).then((result) => {
                const [distance, error] = result;
                if (error) {
                    props.setCost(null);
                    props.setMapError(error);
                } else {
                    const cost = getPriceFromDistance(distance);
                    props.setCost(cost);
                    props.setMapError(null);
                }
            });
        });
    });

    return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default Map;
