import styled from 'styled-components'

export const ViewWrapper = styled.div`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    border-radius: 5px;
    min-height: 0;
    height: 100%;
    overflow: hidden;
`
