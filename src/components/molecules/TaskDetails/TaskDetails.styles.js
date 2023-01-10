import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    max-width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 15px;
    background: ${({ theme }) => theme.background.beige};
    z-index: 2;

    * {
        color: ${({ theme }) => theme.colors.darkGray};
        &:placeholder {
            color: ${({ theme }) => theme.colors.gray};
        }
    }
`

export const Row = styled.div`
    min-height: 50px;
    :not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }

    .twoColumns {
        display: grid;
        grid-template-columns: 35px 1fr;
    }
`

export const AllUsers = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 40px;
    border-radius: 3px;
    background: ${({ theme }) => theme.background.beige};

    // .hidden {
    //     display: none;
    // }
    
    * {
        padding: 5px;
        :hover {
            :after {
                content: '';
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.colors.gray}
                pointer-events: none;
            }
        }
    }   
`

export const Checkbox = styled.input``
