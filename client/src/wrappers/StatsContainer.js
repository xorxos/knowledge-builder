import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  @media (min-width: 567px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 2fr 2fr 2fr;
    column-gap: 1rem;
  }
`;
export default Wrapper;
