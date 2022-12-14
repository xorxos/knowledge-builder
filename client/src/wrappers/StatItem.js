import styled from "styled-components";

const Wrapper = styled.article`
  padding: 1rem;
  background: var(--white);
  background: ${(props) => {
    if (props.selected) {
      return props.color;
    }
  }};
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props) => props.color};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.color};

    .title,
    .count {
      color: var(--white);
    }
    .icon {
      background: var(--white);
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .title,
  .count {
    color: ${(props) => {
      if (props.selected) return "var(--white)";
    }};
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
  .icon {
    background: ${(props) => {
      if (props.selected) return "var(--white)";
    }};
  }
`;

export default Wrapper;
