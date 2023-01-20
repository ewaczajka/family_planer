import styled from 'styled-components'
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper'
import { TaskBox } from 'components/atoms/TaskBox/TaskBox'

export const SectionWrapper = styled(ViewWrapper)`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    color: white;
`

export const Wrapper = styled.div`
    height: 100%;
    padding: 0 30px 30px 30px;
`
