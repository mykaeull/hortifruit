import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  footer {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    gap: 1rem;

    button {
      background: var(--green);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      &.clear-cart {
        background: var(--red);
      }
    }
  }

  div {
    &.vazio {
      margin: 0 auto;
      margin-top: 4rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &.product {
        color: var(--text-title);
      }

      &.delete-icon {
        svg {
          cursor: pointer;
          color: var(--red);

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
        outline: none;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
      svg {
        color: var(--green);
        transition: color 0.2s;
      }
      &:hover {
        svg {
          color: ${darken(0.06, "#33CC95")};
        }
      }
      &:disabled {
        svg {
          color: ${lighten(0.25, "#33CC95")};
          cursor: not-allowed;
        }
      }
    }
  }
`;
