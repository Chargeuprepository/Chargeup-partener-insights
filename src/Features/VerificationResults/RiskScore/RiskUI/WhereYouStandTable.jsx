import styled from 'styled-components';

const StyledWhereYouStandTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 4rem 2rem 2rem 2rem;
`;
const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  height: 4.5rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.6rem;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : 'var(--color-gray-50)'};
`;
const RiskScoreAndPercent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize || '1.6rem'};
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : 'var(--color-gray-600)')};
`;
const ColorColumn = styled.div`
  background-color: ${(props) => props.backgroundcolor};
`;

// const data = [
//   { score: '0-400', percent: '30%', color: '#00953c' },
//   { score: '401-500', percent: '53%', color: '#1aa050' },
//   { score: '501-600', percent: '16%', color: '#f9f906' },
//   { score: '601-750', percent: '0.9%', color: '#ff9c38' },
//   { score: '751-999', percent: '0.1%', color: '#f01010' },
// ];

export default function WhereYouStandTable({
  riskScore = null,
  fontSize,
  whereIStand,
}) {
  return (
    <StyledWhereYouStandTable>
      {whereIStand?.map((val, i) => {
        const ans = val.score.split('-');
        const res =
          Math.floor(riskScore) >= ans[0] && Math.floor(riskScore) <= ans[1];
        return (
          <RowContainer
            key={i}
            backgroundcolor={res && 'var(--color-gray-200)'}
          >
            <RiskScoreAndPercent
              fontSize={fontSize}
              color={res && 'var(--color-gray-800)'}
            >
              {val.score}
            </RiskScoreAndPercent>
            <ColorColumn backgroundcolor={val.color} />
            <RiskScoreAndPercent
              fontSize={fontSize}
              color={res && 'var(--color-gray-800)'}
            >
              {val.percent}
            </RiskScoreAndPercent>
          </RowContainer>
        );
      })}
    </StyledWhereYouStandTable>
  );
}
