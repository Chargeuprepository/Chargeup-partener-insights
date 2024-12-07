import styled from 'styled-components';
import { ColorDiv, GridValue, StyledGrid, valueColorHandler } from '../UI';
import { useEffect, useState } from 'react';
import Spinner from '../../../UI/Spinner';
import { useNavigate } from 'react-router-dom';
import { useOnboardedDriversQueryManager } from '../GraphQL/queryManager';
import RiskModelWindow from './RiskModelWindow';
import { createPortal } from 'react-dom';
import Overlay from '../../../UI/Overlay';

const StyledGridBody = styled.div`
  height: 45rem;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const NoDriverFound = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  position: absolute;
  top: 30%;
  left: 41%;
`;

export default function GridBody() {
  const [openRiskModelWindow, setOpenRiskModelWindow] = useState(false);
  const navigate = useNavigate();
  const { fetchOnboardedDriversData, loading, error, driverData } =
    useOnboardedDriversQueryManager('getOnboardedData');

  useEffect(function () {
    fetchOnboardedDriversData();
  }, []);

  console.log(driverData);

  function handleClickKarma(val) {
    navigate(`/driver/${val.id}`, { state: { data: val } });
  }

  return (
    <>
      <StyledGridBody>
        {driverData ? (
          driverData.onboarded.length > 0 ? (
            driverData.onboarded.map((val, i) => {
              const creditColor = valueColorHandler('credit', val.credit);
              const riskColor = valueColorHandler('risk', val.risk);
              const karmaColor = valueColorHandler('karma', val.karma);

              return (
                <StyledGrid
                  key={i}
                  bgcolor={i % 2 === 0 ? '#f6f6f6' : '#e5e9f2'}
                  // pointer={'true'}
                >
                  <GridValue
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '3rem',
                    }}
                  >
                    {val.id}
                  </GridValue>
                  <GridValue horiScroll={'true'}>
                    {val.name.split(' ')[0] + ' ' + val.name.split(' ')[1]}
                  </GridValue>

                  <GridValue
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <ColorDiv bgColor={creditColor}>{val.credit}</ColorDiv>
                  </GridValue>
                  {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Risk $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
                  <GridValue
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    pointer={'true'}
                    onClick={() => setOpenRiskModelWindow((state) => !state)}
                  >
                    <ColorDiv bgColor={riskColor}>{val.risk}</ColorDiv>
                  </GridValue>
                  {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Risk $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}

                  <GridValue
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onClick={() => handleClickKarma(val)}
                    pointer={'true'}
                  >
                    <ColorDiv bgColor={karmaColor}>{val.karma}</ColorDiv>
                  </GridValue>
                  <GridValue>{val.avgDpd}</GridValue>
                  <GridValue>{val.service}</GridValue>
                  <GridValue>{val.runKm}</GridValue>
                  <GridValue>{val.nps}</GridValue>
                </StyledGrid>
              );
            })
          ) : (
            <NoDriverFound>No Driver Found😟</NoDriverFound>
          )
        ) : (
          <Spinner />
        )}
      </StyledGridBody>

      {openRiskModelWindow &&
        createPortal(
          <Overlay onClick={() => setOpenRiskModelWindow(false)}>
            <RiskModelWindow setOpenRiskModelWindow={setOpenRiskModelWindow} />
          </Overlay>,
          document.body
        )}
    </>
  );
}
