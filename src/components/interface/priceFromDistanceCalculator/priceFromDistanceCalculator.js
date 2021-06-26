import { useEffect, useState } from 'react';
import CostVisualizer from 'components/interface/costVisualizer/costVisualizer';
import DistanceInput from 'components/interface/distanceInput/distanceInput';
import InfoText from 'components/interface/infoText/infoText';
import { getPriceFromDistance } from 'utils/utilityFunctions';

import styles from './priceFromDistanceCalculator.module.css';

const PriceFromDistanceCalculator = (props) => {
    const [cost, setCost] = useState(null);
    const [distance, setDistance] = useState('');

    useEffect(() => {
        if (distance === '') {
            setCost(null);
        } else {
            const distanceInMeters = parseInt(distance) * 1000;
            const price = getPriceFromDistance(
                distanceInMeters,
                props.costPerMile
            );
            setCost(price);
        }
    }, [distance, props]);

    return (
        <div className={`${styles.wrapper} ${props.className ?? ''}`}>
            <div className={styles.textWrapper}>
                <InfoText text={'Enter the length of the trip: '} />
                <DistanceInput value={distance} setValue={setDistance} />
            </div>
            <CostVisualizer cost={cost} className={styles.costVisualizer} />
        </div>
    );
};

export default PriceFromDistanceCalculator;
