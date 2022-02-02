import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 4rem;
  margin-bottom: 1.5rem;

  div {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;

    &.footer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      p {
        cursor: pointer;
        font-size: 1rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      background: #fff;
      border-radius: 4px;
      padding: 20px;

      div {
        &.info-nutri {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          margin-top: 1rem;
          cursor: pointer;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }

      p {
        color: var(--text-body);
      }

      img {
        align-self: center;
      }

      button {
        background: var(--green);
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);
          svg {
            margin-right: 5px;
          }
        }
        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;
