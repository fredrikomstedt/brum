import CostVisualizer from 'components/interface/costVisualizer/costVisualizer';
import Toggle from 'components/interface/toggle/toggle';
import InfoText from 'components/interface/infoText/infoText';
import styles from './priceFromMapCalculator.module.css';

const PriceFromMapCalculator = (props) => {
    const { cost, isRoundTrip, setIsRoundTrip } = props;
    return (
        <div className={styles.wrapper}>
            <InfoText
                className={styles.infoText}
                text={'🗺️ Use the map to select a destination'}
            />
            {!cost && <div />}
            {cost && <CostVisualizer cost={cost} />}
            <Toggle
                leftText={'One way'}
                rightText={'Round trip'}
                onChange={setIsRoundTrip}
                value={isRoundTrip}
            />
        </div>
    );
};

export default PriceFromMapCalculator;
