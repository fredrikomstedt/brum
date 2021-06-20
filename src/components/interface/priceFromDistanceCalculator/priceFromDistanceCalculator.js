import { useState } from 'react';

import styles from './priceFromDistanceCalculator.module.css';

const CostVisualizer = (props) => {
    const { cost } = props;
    return (
        <div className={styles.costWrapper}>
            {cost && (
                <div className={styles.costText}>{`💰${Math.round(
                    props.cost
                )}kr`}</div>
            )}
        </div>
    );
};

const PriceFromDistanceCalculator = (props) => {
    const [cost, setCost] = useState(null);
    return (
        <div className={`${styles.wrapper} ${props.className ?? ''}`}>
            <div>
                <span className={styles.infoText}>
                    {'Enter the length of the trip: '}
                </span>
                <input></input>
                <span className={styles.infoText}>{'km'}</span>
            </div>
            <CostVisualizer cost={cost} />
        </div>
    );
};

export default PriceFromDistanceCalculator;
