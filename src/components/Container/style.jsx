import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: ${props => props.small ? '830px' : '1256px'};
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;

    @media only screen and (max-width: 1302px) {
        width: 768px;
    }

    @media only screen and (max-width: 816px) {
        padding-left: 0;
        padding-right: 0;
        width: calc(100% - 32px);
    }
`;