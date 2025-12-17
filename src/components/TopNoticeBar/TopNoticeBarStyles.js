import styled from "styled-components";

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  font-size: 1.3rem;
  line-height: 1.5;
  text-align: center;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.colors.background2},
    ${(props) => props.theme.colors.accent1}
  );
  color: #fefefe;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);

  span {
    opacity: 0.9;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
  }
`;


