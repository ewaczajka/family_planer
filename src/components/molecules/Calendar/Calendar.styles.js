import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 20px 30px;
    flex-grow: 1;
    overflow-y: scroll;

    .fc {
        .fc-toolbar-title {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSize.m};
        }

        .fc-scrollgrid-section-sticky > * {
            background: ${({ theme }) => theme.colors.darkGray};
        }

        .fc-button:disabled {
            opacity: 0;
        }

        .fc-button-primary {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.colors.lightGray};
            padding: 2px;

            :active,
            :focus {
                background-color: transparent;
                border: none;
                color: ${({ theme }) => theme.colors.white};
                box-shadow: none;
            }

            :not(:disabled):active:focus {
                box-shadow: none;
            }
        }

        .fc-today-button {
            font-size: ${({ theme }) => theme.fontSize.s};
            color: ${({ theme }) => theme.colors.borderGray};
        }

        .fc-daygrid-day.fc-day-today {
            background-color: ${({ theme }) => theme.colors.gray};
        }
    }

    .fc-theme-standard {
        * {
            border-color: ${({ theme }) => theme.colors.borderGray};
        }
        td:last-child {
            border-right: none;
            border-bottom: none;
        }
        th:last-child {
            border-right: none;
        }

        .fc-scrollgrid {
            border: none;
        }
    }
`
