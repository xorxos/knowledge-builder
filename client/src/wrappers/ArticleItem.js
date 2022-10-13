import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto auto;
  box-shadow: var(--shadow-2);

  .actions {
    display: flex;

    button:nth-child(3) {
      margin-left: auto;
    }
  }

  header {
    padding: 1rem 1.5rem;
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }

    div:nth-child(2) {
      margin-left: auto;
    }
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .unpublished {
    background: #fcefc7;
    color: #e9b949;
    margin-left: 0.5rem;
  }
  .published {
    background: #e0e8f9;
    color: #647acb;
  }
  .flagged {
    color: #d66a6a;
  }
  .content {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--grey-100);
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    text-align: center;
    padding: 0 0.5rem;
    height: 30px;
  }
  .tags {
    display: flex;
    flex-basis: 100%;
    padding: 0rem 1.5rem 1rem 1.5rem;
    text-transform: capitalize;
  }
  .tag {
    margin-left: 0.5rem;
    background: var(--primary-700);
    border-radius: var(--borderRadius);
    color: var(--white);
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
    margin-right: 0.5rem;
  }
  .unpublish-btn {
    background: var(--red-dark);
    color: var(--white);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
