import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: auto 0;
  height: 100%;

  h3,h4,p,figure {
    padding: 0 1rem;
  }

  h3,
  h4,
  ul,
  p,
  ol,
  figure {
    cursor: pointer;
    margin: 0;
  }

  figure {
    text-align: center;
    margin: 0;
    img {
        max-width: 200px;
        background: var(--backgroundColor);
    }
  }
`;

export default Wrapper;
