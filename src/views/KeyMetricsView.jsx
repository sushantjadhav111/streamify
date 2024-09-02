import React from 'react';
import styles from '../css/KeyMetrix.module.scss';

const getRandomGradient = () => {
    const gradients = [
      'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

const KeyMetricsView = ({ data }) => {
  return (
    <div className={styles.keyMetricsRow}>
    {data.map((metric, index) => (
      <div
        key={index}
        className={styles.keyMetricsCard}
        style={{ background: getRandomGradient() }}
      >
        <h3 className={styles.keyMetricsCardTitle}>{metric.title}</h3>
        <p className={styles.keyMetricsCardValue}>{metric.value}</p>
      </div>
    ))}
  </div>

  );
};

export default KeyMetricsView;
