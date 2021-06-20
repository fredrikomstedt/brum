import styles from './costVisualizer.module.css';

const CostVisualizer = (props) => {
    const { cost } = props;
    return (
        <div className={`${styles.costWrapper} ${props.className ?? ''}`}>
            {cost && (
                <div className={styles.costText}>{`💰${Math.round(
                    props.cost
                )}kr`}</div>
            )}
        </div>
    );
};

export default CostVisualizer;
