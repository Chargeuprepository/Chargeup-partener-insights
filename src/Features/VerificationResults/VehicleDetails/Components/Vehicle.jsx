import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';
import { useEffect, useState } from 'react';
import { dateSubtractor } from '../../UI/fun';

export default function Vehicle({ vehicleData, registrationDate }) {
  console.log(registrationDate);
  const [vehicleState, setVehicleState] = useState(vehicleData);
  useEffect(function () {
    const dateSubtracted = dateSubtractor(registrationDate);
    setVehicleState((vehicleState) => ({
      vehicleAge: dateSubtracted,
      ...vehicleState,
    }));
  }, []);

  return (
    <AllVerificationAllCategoryTabs
      backgroundcolor={'var(--color-verification-vehicle-light)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'vehicle data'}
      data={vehicleState}
    />
  );
}
