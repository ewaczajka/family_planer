import styled from 'styled-components'

export const Checkbox = styled.input`
    -webkit-appearance: none;
    appearance: none;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid
        ${({ theme, variant }) =>
            variant === 'dark' ? theme.colors.gray : theme.colors.lightGray};
    outline: none;
    cursor: pointer;
    flex-shrink: 0;

    :checked {
        background: ${({ theme }) => theme.colors.purple};
        border-color: ${({ theme }) => theme.colors.lightGray};
        position: relative;

        :after {
            content: '';
            position: absolute;
            height: 12px;
            width: 8px;
            top: 50%;
            left: 25%;
            transform: rotate(45deg) translate(-50%, -50%);
            border-bottom: 3px solid ${({ theme }) => theme.colors.lightGray};
            border-right: 3px solid ${({ theme }) => theme.colors.lightGray};
        }
    }
`
