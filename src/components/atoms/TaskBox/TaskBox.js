import styled from 'styled-components'

export const TaskBox = styled.div`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 0 15px;
`
