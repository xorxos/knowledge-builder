import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    min-height: 89vh;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .add-item-sidebar {
    position: fixed;
    top: var(--nav-height);
    width: 250px;
    height: calc(100vh - var(--nav-height));
    background: var(--white);
    right: 0;
    box-shadow: -1px 0px 0px 0px rgb(0 0 0 / 10%);
  }
  
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
