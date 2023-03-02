import styled from 'styled-components'
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper'

export const SectionWrapper = styled(ViewWrapper)`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    color: white;

    display: flex;
    flex-direction: column;
`
export const SectionBody = styled.div`
    flex-grow: 1;
    display flex;
    padding: 20px 30px;
    gap: 35px;

    >:first-child {
        flex: 70%;
    }
    >:last-child {
        flex: 30%;
    }
`
