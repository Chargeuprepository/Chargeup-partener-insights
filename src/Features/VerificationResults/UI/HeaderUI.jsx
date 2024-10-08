import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100vw;
  height: 9rem;
  background-color: var(--color-gray-0);
  /* background: linear-gradient(
    to top,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  ); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--color-gray-50);
  padding: 0 8rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const LogoVerificationContainer = styled.div`
  display: flex;
  gap: 4rem;
`;
export const Logo = styled(Link)`
  height: 3.8rem;
  width: 3.8rem;
  background-color: var(--color-gray-0);
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;
export const VerificationNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-400);
`;
export const Back = styled(Link)`
  border: none;
  text-transform: capitalize;
  transition: all 0.3s;

  &:hover {
    color: var(--color-gray-600);
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1);
  }
`;
export const GreaterThan = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;
export const VerificationName = styled.div`
  color: var(--color-gray-600);
`;
export const NameMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-transform: uppercase;
`;
export const SingleDetailContainer = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    height: 2.2rem;
    width: 2.2rem;
  }
`;
export const Name = styled.div`
  /* color: var(--color-gray-700); */
  font-weight: 600;
`;
export const Mobile = styled.div`
  /* color: var(--color-gray-500); */
  font-weight: 400;
`;
