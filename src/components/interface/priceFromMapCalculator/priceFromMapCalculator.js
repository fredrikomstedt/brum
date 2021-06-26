import CostVisualizer from '../costVisualizer/costVisualizer';
import styles from './priceFromMapCalculator.module.css';

const PriceFromMapCalculator = (props) => {
    const { cost } = props;
    return (
        <div className={styles.wrapper}>
            {!cost && <div />}
            {cost && <div />}
            {cost && <CostVisualizer cost={cost} />}
        </div>
    );
};

export default PriceFromMapCalculator;
