import CostVisualizer from 'components/interface/costVisualizer/costVisualizer';
import InfoText from 'components/interface/infoText/infoText';
import styles from './priceFromMapCalculator.module.css';

const PriceFromMapCalculator = (props) => {
    const { cost } = props;
    return (
        <div className={styles.wrapper}>
            <InfoText
                className={styles.infoText}
                text={'🗺️ Use the map to select a destination'}
            />
            {cost && <CostVisualizer cost={cost} />}
            <div />
        </div>
    );
};

export default PriceFromMapCalculator;
