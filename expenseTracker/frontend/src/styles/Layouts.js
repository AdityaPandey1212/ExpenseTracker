import styled from "styled-components";
export const MainLayout = styled.div`

    padding: 1rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    
    // media query
    @media screen and (max-width: 1000px){
        flex-direction: column;
        overflow: auto;
        width: 100%;
    }
`;

export const InnerLayout = styled.div`
    padding: 1rem 1.5rem;
    width: 100%;
`;