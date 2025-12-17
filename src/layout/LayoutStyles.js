import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding-top: 4.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 4.8rem;
  }
`;
