import styles from './distanceInput.module.css';

const DistanceInput = (props) => {
    const { value, setValue } = props;

    const handleChange = (event) => {
        let newValue = event.target.value;
        newValue = newValue.match(/^(\s*|[1-9]\d*)$/) ? newValue : value;
        setValue(newValue);
    };

    return (
        <span className={props.className}>
            <input
                className={styles.distanceInput}
                type={'text'}
                placeholder={0}
                value={value}
                onChange={handleChange}
                inputMode={'numeric'}
            />
            <span className={styles.infoText}>{' km'}</span>
        </span>
    );
};

export default DistanceInput;
