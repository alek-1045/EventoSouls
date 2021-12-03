import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    tr{
      button{
        width: 90%;
        padding: 0 1.5rem;
        height: 2.5rem;
        margin-top: 1.0rem;
        background: var(--grey31);
        color: var(--shape);
        border: 2;
        font-size: 1rem;
        border-radius: 0.45rem;
        transition: filter 0.2s;
      }
    }

    li {
    margin-top: 10px;
    list-style: none;
    padding: 5px;
    color: var(--shape);
    background: var(--green1);

    button {
        width: 90%;
        padding: 0 1.5rem;
        height: 2.5rem;
        margin-top: 1.0rem;
        background: var(--grey31);
        color: var(--shape);
        border: 2;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: filter 0.2s;
    }
  }

    
    table {
        border-spacing: 0 0.5rem;
        width: 100%;

        th {
            //color: var(--text-body);
            color: white;
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            background: var(--green1);
            border-radius: 0.50rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            //border-radius: 0.25rem;
            text-align: justify;

            &:first-child {
              color: var(--text-title);
            }

            &.deposit {
              color: var(--text-title)
            }

            &.withdraw {
              color: var(--text-title)
              
            }

        }
    }
`;