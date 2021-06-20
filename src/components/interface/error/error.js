import styles from './error.module.css';

const Error = (props) => {
    return (
        <div className={`${styles.errorWrapper} ${props.className ?? ''}`}>
            <div className={styles.error}>{props.error.toUpperCase()}</div>
            <div className={styles.info}>
                {'Please try refreshing the page.'}
            </div>
        </div>
    );
};

export default Error;
