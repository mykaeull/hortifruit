import styled from "styled-components";

export const Container = styled.header`
  background: var(--green);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    &.element-left {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      p {
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }

  button {
    color: #fff;
    background: none;
    border: 0;
    padding: 0;
    border-radius: 0.25rem;
    height: 3rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    div {
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      display: flex;
      float: right;
    }
  }
`;
