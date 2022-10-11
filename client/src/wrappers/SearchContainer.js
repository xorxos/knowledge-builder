import styled from "styled-components";

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .search-btn {
    border-radius: 0;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.3rem;
    text-align: center;
    box-shadow: none;
    background: var(--white);
    color: black;

    &:hover {
      background: var(--primary-500);
      color: var(--white);
    }
  }
  .search-input {
    flex: 1;
    border: none;
    font-size: 1.2rem;
    padding-left: 10px;

    &:focus-visible {
      outline: none;
    }
  }
  .search-type {
    border-style: solid;
    border-width: 1px 0 1px 1px;
    height: 35px;
  }
  .search-input,
  .form-select {
    height: 35px;
  }
  .search-row {
    margin-bottom: 0;
    display: flex;
    border-style: solid;
    border-width: 1px;
    padding: 0.5rem;
    display: flex;
  }
`;

export default Wrapper;
