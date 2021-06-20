import Error from './error/error';
import PriceFromDistanceCalculator from './priceFromDistanceCalculator/priceFromDistanceCalculator';

import styles from './interface.module.css';

const Title = () => <div className={styles.title}>{'BRUM 🚗💨'}</div>;
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            {`© Fredrik Omstedt ${currentYear}`}
        </div>
    );
};

const HeadingDivider = (props) => {
    const { heading } = props;
    return <div className={styles.headingDivider}>{heading.toUpperCase()}</div>;
};

const Interface = (props) => {
    const { cost, mapError, costPerMile } = props;
    return (
        <div className={styles.interfaceWrapper}>
            <Title />
            <div className={styles.optionsWrapper}>
                {mapError && <Error error={mapError} />}
                {!mapError && <div>{cost}</div>}
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

export default Interface;
