import Switch from 'react-switch';
import styles from './toggle.module.css';

const SelectionText = (props) => (
    <div className={styles.selectionText}>{props.text}</div>
);

const Toggle = (props) => {
    const { leftText, rightText, onChange, value } = props;
    return (
        <div className={`${styles.toggleWrapper} ${props.className ?? ''}`}>
            <SelectionText text={leftText} />
            <Switch
                onChange={onChange}
                checked={value}
                offColor={'#428a7c'}
                offHandleColor={'#8cd3c4'}
                onColor={'#428a7c'}
                onHandleColor={'#8cd3c4'}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                handleDiameter={30}
            />
            <SelectionText text={rightText} />
        </div>
    );
};

export default Toggle;
