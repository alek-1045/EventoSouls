import styled from 'styled-components';

export const Container = styled.header`
    
`;


export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    background: #270000;
    font-size: 20px;

    button {
        font-size: 1rem;
        color: #FFF;
        background: #000000;
        border: 0;
        padding: 0 2rem;
        border-radius: 25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;


// import styled from "styled-components";

// export const Container = styled.div`
//     margin-top: 4rem;
    

//     table {
//         border-spacing: 0 0.5rem;
//         width: 100%;

//         th {
//             //color: var(--text-body);
//             color: white;
//             font-weight: 400;
//             padding: 1rem 2rem 2rem;
//             text-align: left;
//             line-height: 1.5rem;
//             background: var(--green1);
//             border-radius: 0.50rem;
//         }

//         td {
//             padding: 1rem 2rem;
//             border: 0;
//             background: var(--shape);
//             color: var(--text-body);
//             border-radius: 0.25rem;
//             text-align: justify;

//             &:first-child {
//               color: var(--text-title);
//             }

//             &.deposit {
//               color: var(--text-title)
//             }

//             &.withdraw {
//               color: var(--text-title)
              
//             }
//         }
//     }
// `;