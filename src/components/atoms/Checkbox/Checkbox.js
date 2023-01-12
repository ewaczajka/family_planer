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
    background-image: url('assets/check.svg');

    :checked {
        background: ${({ theme, variant }) =>
            variant === 'dark' ? theme.colors.gray : theme.colors.lightGray};
        position: relative;

        :after {
            content: '';
            background-image: url('assets/check.svg');
            -webkit-mask-image: url('assets/check.svg');
            mask-image: url('assets/check.svg');
        }
    }
`
