import styled from 'styled-components'

const Wrapper = styled.main`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 600px;
        display: block;
        margin-bottom: 2rem;
    }
    h3 {
        margin-bottom: .5rem;

    }
    p {
        margin-top: 0;
        margin-bottom: .5rem;
        color: var(--grey-500);
    }
    a {
        color: var(--primary-500);
        text-decoration: underline;
        text-transform: capitalize;
        font-size: 1.2rem;
    }
`

export default Wrapper;