import React from 'react';
import styles from './StarBorder.module.css';

const StarBorder = ({
    className = '',
    color = 'white',
    speed = '6s',
}) => {
    return (
        <div className={`pointer-events-none absolute inset-0 ${className} ${styles.starBorderContainer}`}>
            <div
                className={styles.borderGradientBottom}
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 5%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className={styles.borderGradientTop}
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 5%)`,
                    animationDuration: speed,
                }}
            ></div>
        </div>
    );
};

export default StarBorder;
