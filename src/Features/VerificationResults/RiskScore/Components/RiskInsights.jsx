import styled from 'styled-components';
import GridTab, { OverviewRiskInsightsTabs } from '../../UI/GridTab';

const StyledRiskInsights = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 13rem;
  gap: 1.2rem;
  background-color: var(--color-gray-50);
`;
const DigitalTelecomIdentityOverview = styled.div`
  background-color: var(--color-gray-50);
  display: grid;
  grid-template-columns: 24rem 1fr;
  gap: 1.2rem;
`;
const DigitalTelecomOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.2rem;
`;

export default function RiskInsights({ riskInsightsData, allRef }) {
  const [socialRef, digitalRef, telecomRef] = allRef;

  return (
    <GridTab gridcolumn={'2 / -1'}>
      <StyledRiskInsights>
        <DigitalTelecomIdentityOverview>
          <OverviewRiskInsightsTabs
            backgroundcolor={['#69eae6', '#519bb9']}
            data={riskInsightsData.identity}
          />
          <DigitalTelecomOverview>
            <OverviewRiskInsightsTabs
              backgroundcolor={['#6190e8', '#6190e8']}
              data={riskInsightsData.telecom}
              refVal={telecomRef}
            />

            <OverviewRiskInsightsTabs
              backgroundcolor={['#7dcc50', '#76b852']}
              data={riskInsightsData.digital}
              refVal={digitalRef}
            />
          </DigitalTelecomOverview>
        </DigitalTelecomIdentityOverview>

        <OverviewRiskInsightsTabs
          backgroundcolor={['#f4a93f', '#f4a93f']}
          data={riskInsightsData.social}
          refVal={socialRef}
        />
      </StyledRiskInsights>
    </GridTab>
  );
}
