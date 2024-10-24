import styled from 'styled-components';
import BarRenderContent from '../../../UI/BarRenderContent';
import breakCamelCase from '../../../Utils/breakCamelCase';

const typeData = [
  'personalInformation',
  'contactInformation',
  'vehicleInformation',
  'businessInformation',
  'financialInformation',
  'socialAndDigitalInformation',
];

const StyledDriverOtherDetails = styled.div`
  grid-row: 4;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
  padding: 4rem 2rem;
  box-shadow: 10px 10px 20px rgba(67, 67, 202, 0.445);
  border-radius: 0.6rem;
`;
const DetailHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-100);
  text-transform: uppercase;
`;
const DetailsCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

export default function DriverOtherDetails({ userData }) {
  const labelColor = 'var(--color-gray-100)';
  const valueColor = 'var(--color-gray-300)';
  const border = '1px solid var(--color-gray-600)';

  return (
    <StyledDriverOtherDetails>
      {typeData.map((data) => {
        const userInfo = userData[data];
        return (
          <DetailContainer>
            <DetailHeading>{breakCamelCase(data)}</DetailHeading>
            <DetailsCategory>
              {BarRenderContent(userInfo, labelColor, valueColor, border)}
            </DetailsCategory>
          </DetailContainer>
        );
      })}
    </StyledDriverOtherDetails>
  );
}
