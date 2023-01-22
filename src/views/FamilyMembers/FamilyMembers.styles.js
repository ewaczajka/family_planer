import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 20vh auto;
    display: flex;
    gap: 30px;
    width: 100%;
    overflow-x: scroll;
    scroll-margin-right: 0;

    > :first-child {
        margin-left: auto;
    }

    > :last-child {
        margin-right: auto;
    }
`
