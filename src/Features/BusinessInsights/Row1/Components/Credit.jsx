import Filter from '../../../../UI/Filter';

export default function Credit() {
  return (
    <Filter
      paramName="Credit"
      options={[
        { value: 'high', label: 'High', backColor: '#15ff0087' },
        { value: 'medium', label: 'Med', backColor: '#ffee0083' },
        { value: 'low', label: 'Low', backColor: '#ff000084' },
        { value: 'NCT', label: 'NCT', backColor: '#7c7c7cc5' },
      ]}
    />
  );
}
