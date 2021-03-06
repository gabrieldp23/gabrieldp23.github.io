import styled from 'styled-components';

export const MySelfTabContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 15%;
`;

export const PhotoAndName = styled.div`
    width: 100%;
    max-width: 60rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 3rem 0;
`;

export const HeaderDiv = styled.div`
    margin: 1rem;
`;

export const FullDescription = styled.div`
    width: 100%;
    max-width: 70rem;
    background-color: ${props => props.theme.colors.secondary}99;
    border-radius: 1rem;
    padding: 2rem 2.5rem 1rem 2.5rem;
    color: ${props => props.theme.colors.white};

    p {
        margin-bottom: 1rem;
        filter: drop-shadow(0 0 0.5px black);
    }
`;