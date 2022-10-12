import styled from "styled-components";

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
    padding: 0.7rem;
  }
  .search-btn {
    border-radius: 0;
    height: 100%;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.3rem;
    text-align: center;
    box-shadow: none;
    background: var(--primary-500);
    color: var(--white);
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  }
  .btn-container {
    position: relative;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .dropdown {
    position: absolute;
    top: 37px;
    left: 0;
    width: 100%;
    background: var(--primary-500);
    box-shadow: var(--shadow-2);
    padding: 0.3rem;
    text-align: center;
    visibility: hidden;
    border-radius: 0 0 var(--borderRadius) var(--borderRadius);
    display: none;
    cursor: pointer;
  }
  .show-dropdown {
    visibility: visible;
    display: block;
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
    border-radius: var(--borderRadius);
    background: var(--white);

    /* &:focus-within {
      outline: 1px solid;
    } */
  }
`;

export default Wrapper;
