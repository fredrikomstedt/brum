import styles from './interface.module.css';

const Title = () => <div className={styles.title}>{'Brum 🚗💨'}</div>;
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            {`© Fredrik Omstedt ${currentYear}`}
        </div>
    );
};

const Interface = (props) => {
    const { cost, mapError } = props;
    return (
        <div className={styles.interfaceWrapper}>
            <Title />
            {cost && <div style={{ color: 'white' }}>{Math.round(cost)}</div>}
            {mapError && <div style={{ color: 'red' }}>{mapError}</div>}
            <Footer />
        </div>
    );
};

export default Interface;
