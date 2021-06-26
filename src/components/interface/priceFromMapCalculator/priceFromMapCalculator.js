import Switch from 'react-switch';
import CostVisualizer from 'components/interface/costVisualizer/costVisualizer';
import InfoText from 'components/interface/infoText/infoText';
import styles from './priceFromMapCalculator.module.css';

const SelectionText = (props) => (
    <div className={styles.selectionText}>{props.text}</div>
);

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
            <div className={styles.toggleWrapper}>
                <SelectionText text={'One way'} />
                <Switch
                    onChange={setIsRoundTrip}
                    checked={isRoundTrip}
                    offColor={'#428a7c'}
                    offHandleColor={'#8cd3c4'}
                    onColor={'#428a7c'}
                    onHandleColor={'#8cd3c4'}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    handleDiameter={30}
                />
                <SelectionText text={'Round trip'} />
            </div>
        </div>
    );
};

export default PriceFromMapCalculator;
