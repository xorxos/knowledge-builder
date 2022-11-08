import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--white);
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-2);
  padding: 4rem;
  margin: 0 auto;
  font-family: Georgia, sans-serif;
  max-width: 1000px;
  .article-content {
    display: flex;
    flex-direction: column;
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
  }
  h4,
  h3 {
    font-family: "Universal Sans", sans-serif;
    margin: 0;
    text-transform: none;
  }
  h2,
  .title {
    font-family: "Universal Sans", sans-serif;
    margin-top: 3.75rem;
    text-transform: none;
    cursor: pointer;
    &:first-child {
      margin-top: 0;
    }
  }
  figure {
    text-align: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  ol,
  ul {
    margin-bottom: 12px;
    padding-left: 2rem;
    font-size: 1.25rem;
    line-height: 1.7em;
    margin-top: 0;
  }
  .save-buttons {
    display: flex;
    flex: 1;
    margin: 0.5rem 0;
  }
  .btn-container {
    font-size: 1.3rem;
    display: none;
    align-items: center;
    justify-content: center;
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
    font-family: Georgia, sans-serif;
    font-size: 1rem;
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
  .show {
    display: flex;
  }
  .edit-icon {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  .add-button {
    display: flex;
  }
  .add-icon {
    cursor: pointer;
  }

  .title {
    font-size: 2.441rem;
    width: 100%;
    text-align: left;
    flex: 1;
    font-family: "Universal Sans", sans-serif;
    line-height: 1.3;
    letter-spacing: var(--letterSpacing);
  }
  .largeHeader {
    font-size: 1.953rem;
    line-height: 1.3;
    margin-top: 2.5rem;
    margin-bottom: 1.38rem;
    letter-spacing: var(--letterSpacing);
    font-family: "Universal Sans", sans-serif;
    textarea {
      letter-spacing: var(--letterSpacing);
      font-size: 1.953rem;
      line-height: 1.3;
      letter-spacing: var(--letterSpacing);
      font-family: "Universal Sans", sans-serif;
    }
  }
  .smallHeader {
    margin-bottom: 0;
    margin-top: 2.5rem;
    text-transform: none;
    margin-bottom: 0.5rem;
    font-family: "Universal Sans", sans-serif;
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
    }
    textarea {
      font-family: "Universal Sans", sans-serif;
      letter-spacing: var(--letterSpacing);
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
  .paragraph {
    margin-top: 0;
    margin-bottom: 1.5rem;
    max-width: 45em;
    font-size: 1.25rem;

    p {
      margin: 0;
      font-size: 1.25rem;
    }
  }
  .bullets {
    line-height: 1.7;
    font-size: 1.25rem;
    font-family: Georgia, sans-serif;
  }
  .image {
    margin: 1.5rem 0;
    figure {
      margin: 0;
    }
  }
  .add-icon {
    align-self: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;
