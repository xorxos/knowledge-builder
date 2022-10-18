import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--white);
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-2);
  padding: 4rem 4rem 4rem 3rem;
  margin: 0 auto;
  font-family: Georgia, sans-serif;
  max-width: 1000px;
  .article-content {
    display: flex;
    flex-direction: column;
  }

  .save-btn,
  .cancel-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
  .save-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .cancel-btn {
    color: var(--red-dark);
    background: var(--red-light);
    margin-right: 0.5rem;
  }
  .save-buttons {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex: 1;
  }
  h2,
  h3,
  h4,
  .largeHeader,
  .smallHeader {
    font-family: "Universal Sans", sans-serif;
  }
  h2,
  .title {
    margin-top: 3.75rem;
    text-transform: none;
    &:first-child {
      margin-top: 0;
    }
  }
  h3,
  .largeHeader {
    margin-top: 2.5rem;
    text-transform: none;
  }
  h4,
  .smallHeader {
    margin-top: 2.5rem;
    text-transform: none;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
  p,
  .paragraph {
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

  .title {
    font-size: 2.441rem;
    width: 100%;
    text-align: left;
    flex: 1;
    font-family: "Universal Sans", sans-serif;
    line-height: 1.3;
  }
  .largeHeader {
    font-size: 1.953rem;
    line-height: 1.3;
    letter-spacing: var(--letterSpacing);
  }
  .smallHeader {
    margin-bottom: 0;
  }
`;

export default Wrapper;
