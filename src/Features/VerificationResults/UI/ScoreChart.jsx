import GaugeChart from 'react-gauge-chart';
import { useState } from 'react';

export default function ScoreChart({ param, textColor }) {
  const [value, setValue] = useState(param);
  const percentValue = value / 999;

  return (
    <GaugeChart
      id="gauge-chart"
      nrOfLevels={10}
      colors={['#00953c', '#f9f906', '#f01010']}
      arcWidth={0.33}
      percent={percentValue}
      textColor={textColor || 'var(--color-brand-original-blue-400)'}
      needleColor="var(--color-gray-400)"
      arcPadding={0.045}
      formatTextValue={(value) => `${Math.floor(value * 10)}`}
      animate={true}
      style={{
        width: '30rem',
        height: '12rem',
        fontWeight: '500',
      }}
    />
  );
}
