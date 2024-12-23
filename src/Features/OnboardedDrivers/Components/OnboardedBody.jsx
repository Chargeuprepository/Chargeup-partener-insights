import styled from 'styled-components';
import GridHeader from './GridHeader';
import GridBody from './GridBody';

const StyledOnboardedBody = styled.div`
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.045);
  border-radius: 0.6rem;
  overflow: hidden;
`;

export default function OnboardedBody({ driverData }) {
  return (
    <StyledOnboardedBody>
      <GridHeader />
      <GridBody driverData={driverData && driverData} />
    </StyledOnboardedBody>
  );
}
