import styles from './infoText.module.css';

const InfoText = (props) => (
    <span className={`${styles.infoText} ${props.className ?? ''}`}>
        {props.text}
    </span>
);

export default InfoText;
