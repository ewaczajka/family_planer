import styled from 'styled-components'

export const StyledForm = styled.form`
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
        color: ${({ theme }) => theme.colors.lightGray};
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    input:not([type='checkbox']){
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.s};
        background: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.gray};
        padding: 10px 15px;
        border-radius: 5px;

        :active,
        :focus-visible {
            border: 2px solid ${({ theme }) => theme.colors.purple};
            outline: none;
        }
    }

    input[type='checkbox']{
        vertical-align: middle;
        margin-left: 30px;
    }

    input[type='date'],
    input[type='time'] {
        ::-webkit-inner-spin-button,
        ::-webkit-calendar-picker-indicator {
            display: none;
            -webkit-appearance: none;
        }
    }

    > .twoColumns {
        display: flex;
        justify-items: stretch;
        gap 20px;

        button {
            flex: 1 1 50%;
            padding: 10px 15px;
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }
`
