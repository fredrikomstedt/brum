import Error from './error/error';
import PriceFromMapCalculator from './priceFromMapCalculator/priceFromMapCalculator';
import PriceFromDistanceCalculator from './priceFromDistanceCalculator/priceFromDistanceCalculator';

import styles from './interface.module.css';
import { useEffect, useState } from 'react';

export const Title = (props) => (
    <div className={styles.title}>{props.title}</div>
);
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            {`© Fredrik Omstedt ${currentYear}`}
        </div>
    );
};

export const HeadingDivider = (props) => {
    const { heading } = props;
    return <div className={styles.headingDivider}>{heading.toUpperCase()}</div>;
};

const MobileInterface = (props) => {
    const { cost, mapError, costPerMile, isRoundTrip, setIsRoundTrip } = props;
    return (
        <div className={styles.interfaceWrapper}>
            <Title title={'BRUM 🚗💨'} />
            {mapError && <Error error={mapError} />}
            {!mapError && (
                <PriceFromMapCalculator
                    cost={cost}
                    isRoundTrip={isRoundTrip}
                    setIsRoundTrip={setIsRoundTrip}
                />
            )}
            <Footer />
        </div>
    );
};

const DesktopInterface = (props) => {
    const { cost, mapError, costPerMile, isRoundTrip, setIsRoundTrip } = props;
    return (
        <div className={styles.interfaceWrapper}>
            <Title title={'BRUM 🚗💨'} />
            <div className={styles.optionsWrapper}>
                {mapError && <Error error={mapError} />}
                {!mapError && (
                    <PriceFromMapCalculator
                        cost={cost}
                        isRoundTrip={isRoundTrip}
                        setIsRoundTrip={setIsRoundTrip}
                    />
                )}
                <HeadingDivider heading={'or'} />
                <PriceFromDistanceCalculator
                    className={styles.priceFromDistanceCalculator}
                    costPerMile={costPerMile}
                />
            </div>
            <Footer />
        </div>
    );
};

const Interface = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width >= 1000 ? (
        <DesktopInterface {...props} />
    ) : (
        <MobileInterface {...props} />
    );
};

export default Interface;
