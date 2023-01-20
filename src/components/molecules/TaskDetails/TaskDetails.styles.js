import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    max-width: 280px;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.background.beige};
    font-size: ${({ theme }) => theme.fontSize.s};
`

export const Row = styled.div`
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: relative;

    :not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lineGray};
        color: ${({ theme }) => theme.colors.darkGray};
    }

    &.twoColumns,
    .twoColumns {
        display: grid;
        grid-template-columns: 35px 1fr;

        > :first-child {
            justify-self: center;
        }
    }

    &.flexGrow {
        flex-grow: 1;
        > * {
            color: blue;
            height: 100%;
            overflow-y: scroll;
        }
    }

    &.flexContentSize {
        flex: 0 0 auto;
    }

    &.centered {
        margin: auto;
    }

    .positionRight {
        position: absolute;
        right: 0;
        top: 10px;
    }
`

export const AssignedUser = styled.div`
    align-items: center;
    :not(:first-child) {
        margin-top: 3px;
    }
`

export const AllUsers = styled.div`
    position: absolute;
    z-index: 3;

    :not(:last-child) {
        margin-bottom: 3px;
    }

    &.hidden {
        display: none;
    }
`

export const Placeholder = styled.span`
    color: ${({ theme }) => theme.colors.lineGray};
    font-style: italic;
    position: absolute;
    left: 0;
`
