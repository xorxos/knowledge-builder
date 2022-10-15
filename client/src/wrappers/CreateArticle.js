import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-2);
  padding: 4rem 4rem 4rem 3rem;
  margin: 0 auto;
  font-family: Georgia, sans-serif;
  max-width: 1000px;
  .article-content {
    max-width: 800px;
    margin: 0 auto;
  }
  h2,
  h3,
  h4 {
    font-family: "Universal Sans", sans-serif;
    max-width: 45em;
  }
  h2 {
    margin-top: 3.75rem;
    text-transform: none;
    &:first-child {
      margin-top: 0;
    }
  }
  h3 {
    margin-top: 2.5rem;
    text-transform: none;
  }
  h4 {
    margin-top: 2.5rem;
    text-transform: none;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    margin-top: 0;
    max-width: 45em;
    font-size: 1.25rem;
  }
  figure {
    text-align: center;
    margin: 1.5rem 0;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  ol,
  ul {
    margin-bottom: 12px;
    padding-left: 3rem;
    font-size: 1.25rem;
    line-height: 1.7em;
    margin-top: 0;
    border-left: 5px solid transparent;
    li {
      line-height: 1.7em;
      cursor: pointer;
    }
    &:hover {
      border-left: 5px solid var(--primary-500);
    }
  }
  .btn-container {
    font-size: 1.3rem;
    visibility: hidden;
  }
  .edit-icon {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure {
    border-left: 5px solid transparent;
    padding-left: 1rem;
    cursor: pointer;

    &:hover {
      border-left: 5px solid var(--primary-500);
    }
  }
`;

export default Wrapper;
